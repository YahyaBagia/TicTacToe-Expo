import React from "react";
import {
  View,
  SafeAreaView,
  ViewStyle,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

import Utils from "../common/Utils";
import { BackgroundColor, Images } from "../common/Const";

interface LayoutProps {
  style?: ViewStyle;
}

const Layout: React.FC<LayoutProps> = ({ children, style }) => {
  return (
    <View style={{ backgroundColor: "#373d57", flex: 1, alignItems: "center" }}>
      <SafeAreaView
        style={{
          backgroundColor: BackgroundColor,
          flex: 1,
          width: "100%",
          maxWidth: 480,
          padding: 15,
          ...style,
        }}
      >
        {children}
      </SafeAreaView>
      {Utils.IsOnWeb() && (
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
          onPress={() => {
            Linking.openURL("https://github.com/YahyaBagia/TicTacToe-Expo");
          }}
        >
          <Image
            source={Images.ForkOnGithub}
            style={{ width: 130, height: 130 }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Layout;
