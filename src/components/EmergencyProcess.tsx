import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LocationStep } from './steps/LocationStep';
import { QuestionnaireStep } from './steps/QuestionnaireStep';
import { VoiceVerificationStep } from './steps/VoiceVerificationStep';
import { ImageVerificationStep } from './steps/ImageVerificationStep';
import { HelplineConnectionStep } from './steps/HelplineConnectionStep';

interface EmergencyProcessProps {
  currentStep: number;
  onStepComplete: () => void;
  onSkip: () => void;
}

export const EmergencyProcess: React.FC<EmergencyProcessProps> = ({
  currentStep,
  onStepComplete,
  onSkip
}) => {
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <LocationStep onComplete={onStepComplete} onSkip={onSkip} />;
      case 1:
        return <QuestionnaireStep onComplete={onStepComplete} onSkip={onSkip} />;
      case 2:
        return <VoiceVerificationStep onComplete={onStepComplete} onSkip={onSkip} />;
      case 3:
        return <ImageVerificationStep onComplete={onStepComplete} onSkip={onSkip} />;
      case 4:
        return <HelplineConnectionStep onComplete={onStepComplete} onSkip={onSkip} />;
      default:
        return null;
    }
  };

  const steps = [
    {
      component: LocationStep,
      title: 'Location Selection'
    },
    {
      component: QuestionnaireStep,
      title: 'Emergency Verification'
    },
    {
      component: VoiceVerificationStep,
      title: 'Voice Recording'
    },
    {
      component: ImageVerificationStep,
      title: 'Image Verification'
    },
    {
      component: HelplineConnectionStep,
      title: 'Helpline Connection'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.stepsIndicator}>
          {steps.map((step, index) => (
            <View key={index} style={styles.stepContainer}>
              <View 
                style={[
                  styles.stepCircle,
                  currentStep >= index && styles.activeStepCircle
                ]}
              >
                <Text style={[
                  styles.stepNumber,
                  currentStep >= index && styles.activeStepNumber
                ]}>
                  {index + 1}
                </Text>
              </View>
              <Text style={[
                styles.stepTitle,
                currentStep >= index && styles.activeStepTitle
              ]}>
                {step.title}
              </Text>
              {index !== steps.length - 1 && (
                <View style={[
                  styles.connector,
                  currentStep > index && styles.activeConnector
                ]} />
              )}
            </View>
          ))}
        </View>

        <View style={styles.stepContent}>
          {renderCurrentStep()}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 16,
    maxWidth: 1280,
    alignSelf: 'center',
    width: '100%'
  },
  stepsIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
    paddingHorizontal: 16
  },
  stepContainer: {
    flex: 1,
    alignItems: 'center',
    position: 'relative'
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e5e7eb',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8
  },
  activeStepCircle: {
    backgroundColor: '#ea580c'
  },
  stepNumber: {
    color: '#6b7280',
    fontSize: 14,
    fontWeight: 'bold'
  },
  activeStepNumber: {
    color: '#ffffff'
  },
  stepTitle: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center'
  },
  activeStepTitle: {
    color: '#ea580c',
    fontWeight: 'bold'
  },
  connector: {
    position: 'absolute',
    top: 16,
    right: -50,
    width: 100,
    height: 2,
    backgroundColor: '#e5e7eb',
    zIndex: -1
  },
  activeConnector: {
    backgroundColor: '#ea580c'
  },
  stepContent: {
    marginTop: 24
  }
});