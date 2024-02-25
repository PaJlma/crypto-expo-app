import { FC } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { CryptoScreenProps } from "./CryptoScreen.types";
import { Button } from "react-native-paper";
import ChangingList from "./ChangingList/ChangingList";
import { useRouter } from "expo-router";
import MarketsList from "./MarketsList/MarketsList";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  coinLogo: {
    width: 80,
    height: 80,
  },
  preview: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  naming: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  name: {
    fontSize: 20,
    width: 150,
    fontWeight: "700",
  },
  price: {
    fontSize: 16,
  },
  linkButton: {},
});

const CryptoScreen: FC<CryptoScreenProps> = ({ crypto }) => {
  const { navigate } = useRouter();

  return (
    <View style={styles.body}>
      <View style={styles.main}>
        <View style={styles.header}>
          <View style={styles.preview}>
            <Image
              src={`https://c1.coinlore.com/img/${crypto.nameid}.png`}
              style={styles.coinLogo}
            />
            <View style={styles.naming}>
              <Text style={styles.name} numberOfLines={1}>
                {crypto.name}
              </Text>
              <Text style={styles.price}>{crypto.price_usd}$</Text>
            </View>
          </View>
        </View>
        <ChangingList
          change1h={crypto.percent_change_1h}
          change24h={crypto.percent_change_24h}
          change7d={crypto.percent_change_7d}
        />
        <MarketsList id={crypto.id} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.linkButton}
          onPress={() =>
            navigate(`https://www.coinlore.com/coin/${crypto.nameid}`)
          }
        >
          Посмотреть на сайте
        </Button>
      </View>
    </View>
  );
};

export default CryptoScreen;
