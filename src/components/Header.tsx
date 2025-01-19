import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Shield, LogOut } from 'lucide-react-native';
import { supabase } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';

interface HeaderProps {
  user: User | null;
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Shield color="#f97316" size={32} />
            <Text style={styles.logoText}>Women's Safety Helpline</Text>
          </View>
          
          <View style={styles.nav}>
            <TouchableOpacity>
              <Text style={styles.navLink}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.navLink}>Emergency</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.navLink}>Resources</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.navLink}>Contact</Text>
            </TouchableOpacity>
            
            {user && (
              <TouchableOpacity
                onPress={handleSignOut}
                style={styles.signOutButton}
              >
                <LogOut size={20} color="#374151" />
                <Text style={styles.signOutText}>Sign Out</Text>
              </TouchableOpacity>
            )}
          </View>
          
          <TouchableOpacity style={styles.emergencyButton}>
            <Text style={styles.emergencyButtonText}>Emergency Help</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2
  },
  container: {
    maxWidth: 1280,
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignSelf: 'center',
    width: '100%'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoText: {
    marginLeft: 8,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827'
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24
  },
  navLink: {
    color: '#374151',
    fontSize: 16
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  signOutText: {
    marginLeft: 4,
    color: '#374151',
    fontSize: 16
  },
  emergencyButton: {
    backgroundColor: '#dc2626',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6
  },
  emergencyButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  }
});