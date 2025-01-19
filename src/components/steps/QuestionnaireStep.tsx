import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FileQuestion } from 'lucide-react-native';

interface QuestionnaireStepProps {
  onComplete: (answers: { needsEmergencyHelp: boolean }) => void;
  onSkip: () => void;
}

export const QuestionnaireStep: React.FC<QuestionnaireStepProps> = ({ onComplete, onSkip }) => {
  const [answer, setAnswer] = useState<boolean | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <FileQuestion color="#ea580c" size={24} />
          <Text style={styles.title}>Emergency Verification</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.question}>
            Do you need immediate emergency assistance?
          </Text>

          <View style={styles.options}>
            <TouchableOpacity
              onPress={() => setAnswer(true)}
              style={[
                styles.optionButton,
                answer === true && styles.selectedEmergencyButton
              ]}
            >
              <Text style={[
                styles.optionText,
                answer === true && styles.selectedEmergencyText
              ]}>
                Yes, I need immediate help
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setAnswer(false)}
              style={[
                styles.optionButton,
                answer === false && styles.selectedInfoButton
              ]}
            >
              <Text style={[
                styles.optionText,
                answer === false && styles.selectedInfoText
              ]}>
                No, I'm seeking information only
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.skipButton}
              onPress={onSkip}
            >
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>

            {answer !== null && (
              <TouchableOpacity
                onPress={() => onComplete({ needsEmergencyHelp: answer })}
                style={styles.continueButton}
              >
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#1f2937'
  },
  content: {
    gap: 24
  },
  question: {
    fontSize: 18,
    color: '#374151'
  },
  options: {
    gap: 16
  },
  optionButton: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#e5e7eb'
  },
  selectedEmergencyButton: {
    borderColor: '#dc2626',
    backgroundColor: '#fee2e2'
  },
  selectedInfoButton: {
    borderColor: '#ea580c',
    backgroundColor: '#fff7ed'
  },
  optionText: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center'
  },
  selectedEmergencyText: {
    color: '#dc2626'
  },
  selectedInfoText: {
    color: '#ea580c'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24
  },
  skipButton: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  skipButtonText: {
    color: '#6b7280',
    fontSize: 16
  },
  continueButton: {
    backgroundColor: '#ea580c',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  }
});