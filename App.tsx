import React from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import GameScreen from "./src/screens/GameScreen";

import { StackParamList } from "./src/Types";

const Stack = createStackNavigator<StackParamList>();

const App = () => {
  let [fontsLoaded] = useFonts({
    BlockheadDude: require("./assets/Pacifico-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode={"none"}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
