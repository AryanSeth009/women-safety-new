import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const steps = [
  {
    title: 'Location',
    description: 'Share your current location'
  },
  {
    title: 'Questionnaire',
    description: 'Answer some quick questions'
  },
  {
    title: 'Voice Record',
    description: 'Record a voice message'
  },
  {
    title: 'Video/Photo',
    description: 'Take photos or record video'
  },
  {
    title: 'Helpline',
    description: 'Connect with support'
  }
];

export default function EmergencyProcessScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigation();

  const handleStepComplete = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  const handleSkip = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ArrowLeft color="#000" size={24} onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Emergency Process</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.progressContainer}>
          {steps.map((_, index) => (
            <View
              key={index}
              style={[
                styles.progressDot,
                index <= currentStep && styles.progressDotActive,
                index < steps.length - 1 && styles.progressLine,
                index < currentStep && styles.progressLineActive
              ]}
            />
          ))}
        </View>

        <View style={styles.stepInfo}>
          <Text style={styles.stepCount}>Step {currentStep + 1}/5</Text>
          <Text style={styles.stepTitle}>{steps[currentStep].title}</Text>
          <Text style={styles.stepDescription}>
            {steps[currentStep].description}
          </Text>
        </View>

        <View style={styles.stepContent}>
          {/* Step content will be rendered here */}
        </View>
      </View>
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a'
  },
  content: {
    flex: 1,
    padding: 16
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#e5e7eb'
  },
  progressDotActive: {
    backgroundColor: '#DC2626'
  },
  progressLine: {
    width: 40,
    height: 2,
    backgroundColor: '#e5e7eb',
    marginHorizontal: 4
  },
  progressLineActive: {
    backgroundColor: '#DC2626'
  },
  stepInfo: {
    alignItems: 'center',
    marginBottom: 32
  },
  stepCount: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8
  },
  stepDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center'
  },
  stepContent: {
    flex: 1
  }
});
