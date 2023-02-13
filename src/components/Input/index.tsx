import React from "react";
import { View, Text, TextInput } from "react-native";

import { styles } from "./styles";

type InputProps = {
  keyboardType?: "default" | "decimal-pad" | "email-address";
  text: string;
  value: string;
  placeholder?: string;
  password?: boolean;

  onChangeText: (text: any) => void;
  onBlur?: () => void;
};

export default function Input({
  text,
  value,
  password = false,
  onChangeText,
  onBlur,
  placeholder,
  keyboardType,
}: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        keyboardType={keyboardType}
        value={value}
        style={styles.input}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeholder}
        secureTextEntry={password}
      />
    </View>
  );
}
