import { View } from "react-native";

import { ForegroundColor } from "../common/Const";

const Divider = () => {
  return (
    <View
      style={{
        backgroundColor: ForegroundColor,
        height: 2,
        marginVertical: 10,
      }}
    />
  );
};

export default Divider;
