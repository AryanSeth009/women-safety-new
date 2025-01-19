import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { MapPin, FileQuestion, Mic, Video, Headphones } from 'lucide-react-native';

interface ProcessFlowProps {
  currentStep: number;
}

const steps = [
  {
    icon: MapPin,
    title: 'College Map & Location Selection',
    description: 'Select your location from the map'
  },
  {
    icon: FileQuestion,
    title: 'Questionnaire',
    description: 'Answer a few quick questions'
  },
  {
    icon: Mic,
    title: 'Voicemail Verification',
    description: 'Verify your voice for security'
  },
  {
    icon: Video,
    title: 'Video/Fingerprint Verification',
    description: 'Additional security verification'
  },
  {
    icon: Headphones,
    title: 'Direct Connection to Helpline',
    description: 'Connect with our support team'
  }
];

export const ProcessFlow: React.FC<ProcessFlowProps> = ({ currentStep }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.titleBlack}>Helpline</Text>
        <Text style={styles.titleOrange}> Process</Text>
      </Text>

      <View style={styles.flowContainer}>
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = currentStep >= index;
          const isLast = index === steps.length - 1;
          
          return (
            <View key={index} style={[
              styles.stepRow,
              index % 2 === 1 && { marginLeft: 40 }
            ]}>
              <View style={[
                styles.stepBox,
                isActive && styles.activeStepBox
              ]}>
                <Icon color="#fff" size={24} />
                <Text style={styles.stepText}>{step.title}</Text>
              </View>
              {!isLast && (
                <View style={[
                  index % 2 === 0 ? styles.arrowRight : styles.arrowLeft,
                  currentStep > index && styles.activeArrow
                ]} />
              )}
            </View>
          );
        })}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Every step in the process will be thoroughly verified to ensure authenticity and prevent
          misuse, guaranteeing that the support provided is genuine and reliable.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
    ...Platform.select({
      ios: {
        fontFamily: 'System'
      },
      android: {
        fontFamily: 'Roboto'
      }
    })
  },
  titleBlack: {
    fontWeight: 'bold',
    color: '#000'
  },
  titleOrange: {
    fontWeight: 'bold',
    color: '#ea580c'
  },
  flowContainer: {
    paddingHorizontal: 20,
    gap: 20
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  stepBox: {
    backgroundColor: '#d1d5db',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    maxWidth: '80%'
  },
  activeStepBox: {
    backgroundColor: '#ea580c'
  },
  stepText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    flexShrink: 1
  },
  arrowRight: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 30,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#d1d5db',
    transform: [{ rotate: '90deg' }]
  },
  arrowLeft: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 30,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#d1d5db',
    transform: [{ rotate: '-90deg' }]
  },
  activeArrow: {
    borderBottomColor: '#ea580c'
  },
  footer: {
    backgroundColor: '#fff7ed',
    borderRadius: 8,
    padding: 16,
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#fed7aa'
  },
  footerText: {
    textAlign: 'center',
    color: '#4b5563',
    fontSize: 14,
    lineHeight: 20
  }
});