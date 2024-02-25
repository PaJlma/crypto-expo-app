import { FC } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useGetCryptoMarketsByIdQuery } from "store/services/crypto.service";
import { MarketsListProps } from "./MarketsList.types";
import { List } from "react-native-paper";
import LoadingScreen from "components/screens/LoadingScreen/LoadingScreen";
import moment from "moment";

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
});

const MarketsList: FC<MarketsListProps> = ({ id }) => {
  const { data, isError, isLoading } = useGetCryptoMarketsByIdQuery(id);

  return (
    <View style={styles.body}>
      <Text style={styles.title}>История торговли на биржах</Text>
      {isLoading ? (
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 270,
          }}
        >
          <LoadingScreen />
        </View>
      ) : isError ? (
        "Обшимбка"
      ) : (
        <ScrollView style={{ height: 270 }}>
          {data &&
            data.map((market, index) => (
              <List.Item
                key={index}
                title={market.name ?? "Нет названия"}
                description={moment
                  .unix(market.time)
                  .format("DD.MM.YYYY k:mm:hh")}
                titleStyle={{ fontSize: 14, fontWeight: "700" }}
                descriptionStyle={{ fontSize: 12 }}
                right={(props) => (
                  <Text {...props} style={{ fontSize: 12 }}>
                    {market.price_usd?.toFixed(2) ??
                      market.price?.toFixed(2) ??
                      "Нет цены в "}
                    $
                  </Text>
                )}
              />
            ))}
        </ScrollView>
      )}
    </View>
  );
};

export default MarketsList;
