import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import Utils from "../common/Utils";
import { Font, ForegroundColor, Sounds } from "../common/Const";

import Layout from "../components/Layout";
import Button from "../components/Button";
import Divider from "../components/Divider";
import GridItem from "../components/GridItem";
import GameModeSelector from "../components/GameModeSelector";

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

const GameScreen: React.FC = () => {
  const [gameWith, setGameWith] = useState<"Bot" | "Player">("Bot");

  const [turn, setTurn] = useState<"CROSS" | "ZERO">("CROSS");
  const [grids, setGrids] = useState<Array<"CROSS" | "ZERO" | undefined>>([
    ...new Array(9),
  ]);
  const [gameState, setGameState] = useState<"Game Over" | "Game Draw" | "">(
    ""
  );
  const [winner, setWinner] = useState<"CROSS" | "ZERO" | undefined>(undefined);
  const [winningIndexes, setWinningIndexes] = useState<Array<Array<number>>>(
    []
  );

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
    const winningIndexArray = winArrays.filter((winArr) => {
      const [first, second, third] = winArr;
      if (
        grids[first] !== undefined &&
        grids[first] === grids[second] &&
        grids[second] === grids[third]
      ) {
        return winArr;
      }
    });

    if (winningIndexArray.length > 0) {
      const [firstWinArray] = winningIndexArray;
      const winner = grids[firstWinArray[0]];
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

  const isGameStarted = (): boolean => {
    return grids.filter((v) => v !== undefined).length !== 0;
  };

  const getTurnLabelText = (): string => {
    let emoji = "",
      text = "";
    if (gameState === "") {
      if (turn === "CROSS") {
        if (gameWith === "Bot") {
          text = "Your Turn";
        } else {
          text = "X's Turn";
        }
      } else {
        if (gameWith === "Bot") {
          text = "Bot's Turn";
        } else {
          text = "O's Turn";
        }
      }
    } else if (gameState === "Game Over") {
      emoji = "⭐";
      if (winner === "CROSS") {
        if (gameWith === "Bot") {
          text = " You Won ";
        } else {
          text = " X Won ";
        }
      } else {
        if (gameWith === "Bot") {
          text = " Bot Won ";
        } else {
          text = " O Won ";
        }
      }
    } else {
      emoji = "😑";
      text = " Draw ";
    }
    return `${emoji}${text}${emoji}`;
  };

  const isInWinIndex = (index: number): boolean => {
    const winIn = winningIndexes.flat();
    return winIn.includes(index);
  };

  return (
    <Layout style={{ justifyContent: "center" }}>
      <View>
        <Text
          style={{
            fontFamily: Font.FontName,
            fontSize: 26,
            color: ForegroundColor,
            textAlign: "center",
          }}
        >
          Opponent
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <GameModeSelector
            title="Friend"
            onPress={() => setGameWith("Player")}
            isSelected={gameWith === "Player"}
            disabled={isGameStarted()}
          />
          <GameModeSelector
            title="Bot"
            onPress={() => setGameWith("Bot")}
            isSelected={gameWith === "Bot"}
            disabled={isGameStarted()}
          />
        </View>
        <Divider />
      </View>
      <Text
        style={{
          fontFamily: Font.FontName,
          fontSize: 40,
          color: ForegroundColor,
          textAlign: "center",
        }}
      >
        {getTurnLabelText()}
      </Text>
      <View
        style={{
          marginVertical: 12,
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
                isWinningIndex={isInWinIndex(ind1)}
              />
              <GridItem
                index={ind2}
                onPress={onGridPress}
                state={grids[ind2]}
                isWinningIndex={isInWinIndex(ind2)}
              />
              <GridItem
                index={ind3}
                onPress={onGridPress}
                state={grids[ind3]}
                isWinningIndex={isInWinIndex(ind3)}
              />
            </View>
          ))}
        </View>
      </View>
      <Divider />
      <View style={{ flexDirection: "row" }}>
        <Button title={"Reset"} onPress={onReset} />
      </View>
    </Layout>
  );
};

export default GameScreen;
