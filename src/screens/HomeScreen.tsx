import React from "react";
import { Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import Layout from "../components/Layout";
import Button from "../components/Button";

import { StackParamList } from "../Types";
import { Font } from "../common/Const";

type HomeScreenNavigationProps = StackNavigationProp<
  StackParamList,
  "HomeScreen"
>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProps;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <Layout style={{ justifyContent: "center" }}>
      <View style={{ height: "50%", justifyContent: "center" }}>
        <Text
          style={{
            fontFamily: Font.FontName,
            fontSize: 50,
            color: "white",
            textAlign: "center",
          }}
        >
          Tic-Tac-Toe
        </Text>
      </View>

      <View style={{ height: "50%" }}>
        <Button
          title={"Play with Bot"}
          onPress={() => {
            navigation.push("GameScreen", { gameWith: "Bot" });
          }}
          style={{ marginVertical: 10, marginHorizontal: 10 }}
        />
        <Button
          title={"Play with Friend"}
          onPress={() => {
            navigation.push("GameScreen", { gameWith: "Player" });
          }}
          style={{ marginVertical: 10, marginHorizontal: 10 }}
        />
      </View>
    </Layout>
  );
};

export default HomeScreen;
