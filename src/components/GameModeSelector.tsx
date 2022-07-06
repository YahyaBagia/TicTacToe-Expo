import { Pressable, Text, ViewStyle } from "react-native";

import { Font, ForegroundColor } from "../common/Const";

interface GameModeSelectorProps {
  title: string;
  onPress?: () => void;
  isSelected: boolean;
  disabled: boolean;
  style?: ViewStyle;
}

const GameModeSelector: React.FC<GameModeSelectorProps> = ({
  title,
  onPress,
  isSelected,
  disabled,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        height: 44,
        backgroundColor: isSelected ? ForegroundColor : "transparent",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: ForegroundColor,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 8,
        marginHorizontal: 4,
        flex: 1,
        ...style,
      }}
      disabled={disabled}
    >
      <Text
        style={{
          fontFamily: Font.FontName,
          fontSize: 22,
          color: isSelected ? "#333027" : ForegroundColor,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default GameModeSelector;
