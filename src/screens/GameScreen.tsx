import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  GestureResponderEvent,
  TouchableOpacity,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import Utils from "../common/Utils";
import { Font, ForegroundColor, Sounds } from "../common/Const";

import Layout from "../components/Layout";
import Button from "../components/Button";

import { StackParamList } from "../Types";

type GameScreenNavigationProps = StackNavigationProp<
  StackParamList,
  "GameScreen"
>;

type GameScreenRouteProp = RouteProp<StackParamList, "GameScreen">;

type GameScreenProps = {
  navigation: GameScreenNavigationProps;
  route: GameScreenRouteProp;
};

const GameScreen: React.FC<GameScreenProps> = ({ navigation, route }) => {
  const { gameWith = "Bot" } = route.params;

  const [turn, setTurn] = useState<"CROSS" | "ZERO">("CROSS");
  const [grids, setGrids] = useState<Array<"CROSS" | "ZERO" | "EMPTY">>([
    "EMPTY",
    "EMPTY",
    "EMPTY",
    "EMPTY",
    "EMPTY",
    "EMPTY",
    "EMPTY",
    "EMPTY",
    "EMPTY",
  ]);
  const [gameState, setGameState] = useState<"Game Over" | "Game Draw" | "">(
    ""
  );
  const [winner, setWinner] = useState<"CROSS" | "ZERO" | undefined>(undefined);
  const [winningIndexes, setWinningIndexes] = useState<number[]>([]);

  useEffect(() => {
    if (grids.includes("CROSS") === false && grids.includes("ZERO") === false) {
      return;
    }

    //CHECK WIN LOGIC
    const didSomeoneWon = checkWinner();
    //CHECK IF GAME DRAW
    if (didSomeoneWon) {
      setGameState("Game Over");
    } else if (didSomeoneWon === false && grids.includes("EMPTY") === false) {
      setGameState("Game Draw");
    } else {
      setTurn(turn === "CROSS" ? "ZERO" : "CROSS");
    }
  }, [grids]);

  useEffect(() => {
    //CHECK IF PLAYING AGAINTS BOT
    if (turn === "ZERO" && gameWith === "Bot") {
      onBotsTurn();
    }
  }, [turn]);

  useEffect(() => {
    if (gameState === "Game Over") {
      Utils.playSound(Sounds.Game_Won);
    } else if (gameState === "Game Draw") {
      Utils.playSound(Sounds.Game_Draw);
    }
  }, [gameState]);

  const onBotsTurn = async () => {
    await Utils.sleep();
    //TAKE TURN AUTOMATICALLY
    let emptyIndexes: number[] = [];
    grids.map((grid, index) => {
      if (grid === "EMPTY") {
        emptyIndexes.push(index);
      }
    });

    const botSelectedIndex = Math.floor(Math.random() * emptyIndexes.length);
    onGridPress(emptyIndexes[botSelectedIndex], true);
  };

  const checkWinner = (): boolean => {
    if (
      grids[0] !== "EMPTY" &&
      grids[0] === grids[1] &&
      grids[1] === grids[2]
    ) {
      setWinner(grids[0]);
      setWinningIndexes([0, 1, 2]);
      return true;
    } else if (
      grids[3] !== "EMPTY" &&
      grids[3] === grids[4] &&
      grids[4] === grids[5]
    ) {
      setWinner(grids[3]);
      setWinningIndexes([3, 4, 5]);
      return true;
    } else if (
      grids[6] !== "EMPTY" &&
      grids[6] === grids[7] &&
      grids[7] === grids[8]
    ) {
      setWinner(grids[6]);
      setWinningIndexes([6, 7, 8]);
      return true;
    } else if (
      grids[0] !== "EMPTY" &&
      grids[0] === grids[3] &&
      grids[3] === grids[6]
    ) {
      setWinner(grids[0]);
      setWinningIndexes([0, 3, 6]);
      return true;
    } else if (
      grids[1] !== "EMPTY" &&
      grids[1] === grids[4] &&
      grids[4] === grids[7]
    ) {
      setWinner(grids[1]);
      setWinningIndexes([1, 4, 7]);
      return true;
    } else if (
      grids[2] !== "EMPTY" &&
      grids[2] === grids[5] &&
      grids[5] === grids[8]
    ) {
      setWinner(grids[2]);
      setWinningIndexes([2, 5, 8]);
      return true;
    } else if (
      grids[0] !== "EMPTY" &&
      grids[0] === grids[4] &&
      grids[4] === grids[8]
    ) {
      setWinner(grids[0]);
      setWinningIndexes([0, 4, 8]);
      return true;
    } else if (
      grids[2] !== "EMPTY" &&
      grids[2] === grids[4] &&
      grids[4] === grids[6]
    ) {
      setWinner(grids[2]);
      setWinningIndexes([2, 4, 6]);
      return true;
    }
    return false;
  };

  const onGridPress = (index: number, byBot?: boolean) => {
    const canGameContinue = gameState.length === 0;
    let isValidTurn = true;
    if (gameWith === "Bot" && turn === "ZERO" && !byBot) {
      isValidTurn = false;
    }
    const isGridEmpty = grids[index] === "EMPTY";

    if (canGameContinue && isValidTurn && isGridEmpty) {
      let newGrids = [...grids];
      newGrids[index] = turn;
      setGrids([...newGrids]);
      Utils.playSound(Sounds.Move_Sound);
    }
  };

  const onReset = () => {
    setTurn("CROSS");
    setGrids([
      "EMPTY",
      "EMPTY",
      "EMPTY",
      "EMPTY",
      "EMPTY",
      "EMPTY",
      "EMPTY",
      "EMPTY",
      "EMPTY",
    ]);
    setGameState("");
    setWinner(undefined);
    setWinningIndexes([]);
  };

  return (
    <Layout style={{ justifyContent: "center" }}>
      <Text
        style={{
          fontFamily: Font.FontName,
          fontSize: 45,
          color: ForegroundColor,
          textAlign: "center",
        }}
      >
        {gameState === ""
          ? turn === "CROSS"
            ? "X's Turn"
            : "O's Turn"
          : gameState === "Game Over"
          ? winner === "CROSS"
            ? "⭐ X Won ⭐"
            : "⭐ O Won ⭐"
          : "😑 Draw 😑"}
      </Text>
      <View
        style={{
          marginVertical: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 300,
            height: 300,
            backgroundColor: "#2369EE",
            borderRadius: 6,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <GridItem
              index={0}
              onPress={onGridPress}
              state={grids[0]}
              isWinningIndex={winningIndexes.includes(0)}
            />
            <GridItem
              index={1}
              onPress={onGridPress}
              state={grids[1]}
              isWinningIndex={winningIndexes.includes(1)}
            />
            <GridItem
              index={2}
              onPress={onGridPress}
              state={grids[2]}
              isWinningIndex={winningIndexes.includes(2)}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <GridItem
              index={3}
              onPress={onGridPress}
              state={grids[3]}
              isWinningIndex={winningIndexes.includes(3)}
            />
            <GridItem
              index={4}
              onPress={onGridPress}
              state={grids[4]}
              isWinningIndex={winningIndexes.includes(4)}
            />
            <GridItem
              index={5}
              onPress={onGridPress}
              state={grids[5]}
              isWinningIndex={winningIndexes.includes(5)}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <GridItem
              index={6}
              onPress={onGridPress}
              state={grids[6]}
              isWinningIndex={winningIndexes.includes(6)}
            />
            <GridItem
              index={7}
              onPress={onGridPress}
              state={grids[7]}
              isWinningIndex={winningIndexes.includes(7)}
            />
            <GridItem
              index={8}
              onPress={onGridPress}
              state={grids[8]}
              isWinningIndex={winningIndexes.includes(8)}
            />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Button
          title={"Reset"}
          onPress={onReset}
          style={{ marginVertical: 10, marginHorizontal: 10, flex: 1 }}
        />
        <Button
          title={"Exit"}
          onPress={navigation.goBack}
          style={{ marginVertical: 10, marginHorizontal: 10, flex: 1 }}
        />
      </View>
    </Layout>
  );
};

interface GridItemProps {
  index: number;
  state: "ZERO" | "CROSS" | "EMPTY";
  onPress: (index: number) => void;
  isWinningIndex: boolean;
}
const GridItem: React.FC<GridItemProps> = ({
  state,
  index,
  onPress,
  isWinningIndex,
}) => (
  <TouchableOpacity
    onPress={(event: GestureResponderEvent) => onPress(index)}
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
    {state !== "EMPTY" ? (
      <Text
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: isWinningIndex ? 65 : 45,
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
  </TouchableOpacity>
);

export default GameScreen;
