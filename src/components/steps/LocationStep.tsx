import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { MapPin, AlertCircle } from 'lucide-react-native';
import MapView, { Marker } from 'react-native-maps';
import { supabase } from '../../lib/supabase';

interface Location {
  lat: number;
  lng: number;
  address: string;
}

interface LocationStepProps {
  onComplete: (location: Location) => void;
  onSkip: () => void;
}

export const LocationStep: React.FC<LocationStepProps> = ({ onComplete, onSkip }) => {
  const [location, setLocation] = useState<Location | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLocationSelect = async (event: any) => {
    const { latitude: lat, longitude: lng } = event.nativeEvent.coordinate;
    try {
      setError(null);
      // Use OpenStreetMap's Nominatim service for reverse geocoding
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      
      if (data.display_name) {
        setLocation({
          lat,
          lng,
          address: data.display_name
        });
      }
    } catch (error) {
      console.error('Geocoding error:', error);
      setError('Failed to get address for selected location. Please try again.');
    }
  };

  const handleConfirmLocation = async () => {
    if (!location) return;
    
    setSaving(true);
    setError(null);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setError('Please sign in to continue');
        return;
      }

      const { error: locationError } = await supabase
        .from('emergency_locations')
        .insert([
          {
            user_id: user.id,
            latitude: location.lat,
            longitude: location.lng,
            address: location.address,
            status: 'pending'
          }
        ]);

      if (locationError) throw locationError;
      
      onComplete(location);
    } catch (error) {
      console.error('Save location error:', error);
      setError('Failed to save location. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MapPin color="#ea580c" size={24} />
        <Text style={styles.title}>Select Your Location</Text>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 20.5937,
            longitude: 78.9629,
            latitudeDelta: 20,
            longitudeDelta: 20,
          }}
          onPress={handleLocationSelect}
        >
          {location && (
            <Marker
              coordinate={{
                latitude: location.lat,
                longitude: location.lng
              }}
            />
          )}
        </MapView>
      </View>

      {location && (
        <View style={styles.addressContainer}>
          <Text style={styles.addressLabel}>Selected Location:</Text>
          <Text style={styles.address}>{location.address}</Text>
        </View>
      )}

      {error && (
        <View style={styles.errorContainer}>
          <AlertCircle color="#dc2626" size={20} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={onSkip}
        >
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.confirmButton,
            (!location || saving) && styles.disabledButton
          ]}
          onPress={handleConfirmLocation}
          disabled={!location || saving}
        >
          {saving ? (
            <ActivityIndicator color="#ffffff" />
          ) : (
            <Text style={styles.confirmButtonText}>Confirm Location</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#1f2937'
  },
  mapContainer: {
    height: 400,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16
  },
  map: {
    flex: 1
  },
  addressContainer: {
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16
  },
  addressLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4b5563',
    marginBottom: 4
  },
  address: {
    fontSize: 16,
    color: '#1f2937'
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fee2e2',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16
  },
  errorText: {
    marginLeft: 8,
    color: '#dc2626',
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  skipButton: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  skipButtonText: {
    color: '#6b7280',
    fontSize: 16
  },
  confirmButton: {
    backgroundColor: '#ea580c',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  disabledButton: {
    backgroundColor: '#f3f4f6',
  },
  confirmButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  }
});