import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Colors from '../../constants/Colors';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Badge({
  children,
  variant = 'default',
  style,
  textStyle,
}: BadgeProps) {
  const getVariantStyle = () => {
    switch (variant) {
      case 'success':
        return { backgroundColor: Colors.success + '20', color: Colors.success };
      case 'warning':
        return { backgroundColor: Colors.warning + '20', color: Colors.warning };
      case 'error':
        return { backgroundColor: Colors.error + '20', color: Colors.error };
      default:
        return { backgroundColor: Colors.primary + '20', color: Colors.primary };
    }
  };

  const variantStyle = getVariantStyle();

  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: variantStyle.backgroundColor },
        style,
      ]}
    >
      <Text style={[styles.text, { color: variantStyle.color }, textStyle]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
});
