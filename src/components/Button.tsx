import React from "react";
import { TouchableOpacity, Text, ViewStyle } from "react-native";

import { FontFamily, ForegroundColor } from "../common/Const";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 60,
        backgroundColor: ForegroundColor,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <Text
        style={{
          fontFamily: FontFamily,
          fontSize: 25,
          color: "#333027",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
