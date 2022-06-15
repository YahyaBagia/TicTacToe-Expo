import { Platform } from "react-native";
import { Audio } from "expo-av";
import { AVPlaybackSource } from "expo-av/build/AV";

export default class Utils {
  //#region Utilities
  static Sleep = (seconds = 1) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, seconds * 1000);
    });
  };

  static PlaySound = async (audio: AVPlaybackSource) => {
    const { sound } = await Audio.Sound.createAsync(audio);
    await sound.playAsync();
  };

  static IsOnWeb = () => Platform.OS === "web";
}
