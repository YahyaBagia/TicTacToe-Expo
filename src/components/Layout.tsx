import React from "react";
import { View, SafeAreaView, ViewStyle, Platform } from "react-native";
import { BackgroundColor } from "../common/Const";

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
          width: Platform.OS === "web" ? 480 : "100%",
          padding: 15,
          ...style,
        }}
      >
        {children}
      </SafeAreaView>
    </View>
  );
};

export default Layout;
