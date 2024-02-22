import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppProps } from "./App.types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const App: FC<AppProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
