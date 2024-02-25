import { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import { NoInternetScreenProps } from "./NoInternetScreen.types";
import { Icon } from "react-native-paper";

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const NoInternetScreen: FC<NoInternetScreenProps> = (props) => {
  return (
    <View style={styles.body}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Icon source="wifi-remove" size={30} />
        <Text>Нет интернетов!</Text>
      </View>
    </View>
  );
};

export default NoInternetScreen;
