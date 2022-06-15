import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
  const [grids, setGrids] = useState<Array<"CROSS" | "ZERO" | undefined>>([
    ...new Array(9),
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

    const didSomeoneWon = checkWinner();
    if (didSomeoneWon) {
      setGameState("Game Over");
    } else if (didSomeoneWon === false && grids.includes(undefined) === false) {
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
      Utils.PlaySound(Sounds.Game_Won);
    } else if (gameState === "Game Draw") {
      Utils.PlaySound(Sounds.Game_Draw);
    }
  }, [gameState]);

  const onBotsTurn = async () => {
    await Utils.Sleep();
    //TAKE TURN AUTOMATICALLY
    let emptyIndexes: number[] = [];
    grids.map((grid, index) => {
      if (grid === undefined) {
        emptyIndexes.push(index);
      }
    });

    const botSelectedIndex = Math.floor(Math.random() * emptyIndexes.length);
    onGridPress(emptyIndexes[botSelectedIndex], true);
  };

  const checkWinner = (): boolean => {
    const winArrays = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    const winningIndexArray = winArrays.find((winArr) => {
      const [first, second, third] = winArr;
      if (
        grids[first] !== undefined &&
        grids[first] === grids[second] &&
        grids[second] === grids[third]
      ) {
        return winArr;
      }
    });

    if (winningIndexArray !== undefined) {
      const [first] = winningIndexArray;
      const winner = grids[first];
      setWinner(winner);
      setWinningIndexes(winningIndexArray);
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

    if (canGameContinue && isValidTurn && grids[index] === undefined) {
      let newGrids = [...grids];
      newGrids[index] = turn;
      setGrids([...newGrids]);
      Utils.PlaySound(Sounds.Move_Sound);
    }
  };

  const onReset = () => {
    setTurn("CROSS");
    setGrids([...new Array(9)]);
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
          {[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
          ].map(([ind1, ind2, ind3], i) => (
            <View style={{ flexDirection: "row" }} key={`${i}`}>
              <GridItem
                index={ind1}
                onPress={onGridPress}
                state={grids[ind1]}
                isWinningIndex={winningIndexes.includes(ind1)}
              />
              <GridItem
                index={ind2}
                onPress={onGridPress}
                state={grids[ind2]}
                isWinningIndex={winningIndexes.includes(ind2)}
              />
              <GridItem
                index={ind3}
                onPress={onGridPress}
                state={grids[ind3]}
                isWinningIndex={winningIndexes.includes(ind3)}
              />
            </View>
          ))}
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
  <TouchableOpacity
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
  </TouchableOpacity>
);

export default GameScreen;
