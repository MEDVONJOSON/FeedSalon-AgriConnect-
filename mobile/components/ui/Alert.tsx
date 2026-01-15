import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

interface AlertProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  style?: any;
}

export function Alert({ children, variant = 'default', style }: AlertProps) {
  const getVariantStyle = () => {
    switch (variant) {
      case 'success':
        return { backgroundColor: Colors.success + '20', borderColor: Colors.success };
      case 'warning':
        return { backgroundColor: Colors.warning + '20', borderColor: Colors.warning };
      case 'error':
        return { backgroundColor: Colors.error + '20', borderColor: Colors.error };
      case 'info':
        return { backgroundColor: Colors.secondary + '20', borderColor: Colors.secondary };
      default:
        return { backgroundColor: Colors.background, borderColor: Colors.border };
    }
  };

  const variantStyle = getVariantStyle();

  return (
    <View style={[styles.alert, { ...variantStyle }, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  alert: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    color: Colors.text,
    lineHeight: 20,
  },
});
