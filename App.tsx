import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";

import * as Fonts from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

import { Font } from "./src/common/Const";

import GameScreen from "./src/screens/GameScreen";

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();
      await Fonts.loadAsync({
        [Font.FontName]: Font.FontFile,
      });
      setIsFontLoaded(true);
      await SplashScreen.hideAsync();
    })();
  }, []);

  if (!isFontLoaded) return <></>;

  return (
    <>
      <GameScreen />
      <StatusBar style="light" />
    </>
  );
};

export default App;
