import { Pressable, Text, ViewStyle } from "react-native";

import { Font, ForegroundColor } from "../common/Const";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        height: 60,
        backgroundColor: ForegroundColor,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        marginHorizontal: 10,
        flex: 1,
        ...style,
      }}
    >
      <Text
        style={{
          fontFamily: Font.FontName,
          fontSize: 25,
          color: "#333027",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
