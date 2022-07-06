import { Text, Pressable } from "react-native";
import { Font, ForegroundColor } from "../common/Const";

interface GridItemProps {
  index: number;
  state: "ZERO" | "CROSS" | undefined;
  onPress: (index: number) => void;
  isWinningIndex: boolean;
}
const GridItem: React.FC<GridItemProps> = ({
  state,
  index,
  onPress,
  isWinningIndex,
}) => (
  <Pressable
    onPress={() => onPress(index)}
    style={{
      backgroundColor: "#2c3045",
      height: 98,
      width: 98,
      margin: 1,
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
    }}
    activeOpacity={1}
  >
    {state !== undefined ? (
      <Text
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: isWinningIndex ? 65 : 55,
          fontFamily: Font.FontName,
          color: ForegroundColor,
          textShadowColor: isWinningIndex ? ForegroundColor : undefined,
          textShadowOffset: isWinningIndex
            ? { width: -1, height: 1 }
            : undefined,
          textShadowRadius: isWinningIndex ? 15 : undefined,
        }}
      >
        {state === "CROSS" ? "X" : "O"}
      </Text>
    ) : (
      <></>
    )}
  </Pressable>
);

export default GridItem;
