import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import { Bell, Menu, Phone, MapPin, Mic, Video, Headphones, MessageCircle, AlertCircle } from 'lucide-react-native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { isAuthenticated } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Menu color="#000" size={24} />
        <Text style={styles.headerTitle}>Raksha</Text>
        <Bell color="#000" size={24} />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.subText}>Your safety is our priority</Text>

        <TouchableOpacity 
          style={styles.emergencyCard}
          onPress={() => navigation.navigate('EmergencyProcess' as never)}
        >
          <View style={styles.emergencyContent}>
            <AlertCircle color="#DC2626" size={32} />
            <Text style={styles.emergencyTitle}>Emergency Help</Text>
            <Text style={styles.emergencyText}>
              Get immediate assistance in case of emergency
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.servicesSection}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          <View style={styles.servicesGrid}>
            {[
              { icon: MapPin, title: 'Location', desc: 'Share your location' },
              { icon: Mic, title: 'Voice Record', desc: 'Record voice message' },
              { icon: Video, title: 'Video Record', desc: 'Record video evidence' },
              { icon: Headphones, title: 'Helpline', desc: 'Contact helpline' }
            ].map((service, index) => (
              <TouchableOpacity key={index} style={styles.serviceCard}>
                <View style={styles.serviceIconContainer}>
                  <service.icon color="#DC2626" size={24} />
                </View>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceDesc}>{service.desc}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.helpCard}>
          <View style={styles.helpContent}>
            <MessageCircle color="#0369A1" size={32} />
            <Text style={styles.helpTitle}>Need Help?</Text>
            <Text style={styles.helpText}>
              Our support team is available 24/7 to assist you
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DC2626'
  },
  content: {
    flex: 1,
    padding: 16
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginTop: 16
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
    marginBottom: 24
  },
  emergencyCard: {
    backgroundColor: '#FFF5F5',
    borderRadius: 16,
    padding: 20,
    marginBottom: 32
  },
  emergencyContent: {
    alignItems: 'center'
  },
  emergencyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DC2626',
    marginTop: 12,
    marginBottom: 8
  },
  emergencyText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center'
  },
  servicesSection: {
    marginBottom: 32
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    width: '47%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center'
  },
  serviceIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFF5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4
  },
  serviceDesc: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center'
  },
  helpCard: {
    backgroundColor: '#F0F9FF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 32
  },
  helpContent: {
    alignItems: 'center'
  },
  helpTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0369A1',
    marginTop: 12,
    marginBottom: 8
  },
  helpText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center'
  }
});
