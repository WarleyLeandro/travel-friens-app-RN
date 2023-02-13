import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  size?: "small" | "large";
  transparent?: boolean;

  onPress(): void;
};

export default function Button({ title, transparent, ...rest }: ButtonProps) {
  return transparent ? (
    <TouchableOpacity style={styles.buttonTransparent} {...rest}>
      <Text style={styles.titleTransparent}>{title}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
