import { FC } from "react";
import { View, StyleSheet } from "react-native";
import { LoadingScreenProps } from "./LoadingScreen.types";
import { ActivityIndicator } from "react-native-paper";

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const LoadingScreen: FC<LoadingScreenProps> = (props) => {
  return (
    <View style={styles.body}>
      <ActivityIndicator animating />
    </View>
  );
};

export default LoadingScreen;
