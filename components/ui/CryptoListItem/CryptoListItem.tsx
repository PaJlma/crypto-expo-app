import { FC } from "react";
import { Text, View, Image } from "react-native";
import { CryptoListItemProps } from "./CryptoListItem.types";
import { Icon, List, TouchableRipple } from "react-native-paper";
import useAppTheme from "hooks/useAppTheme/useAppTheme";
import { useRouter } from "expo-router";

const CryptoListItem: FC<CryptoListItemProps> = ({ crypto }) => {
  const { navigate } = useRouter();
  const theme = useAppTheme();

  return (
    <TouchableRipple
      onPress={() => navigate(`crypto/${crypto.id}`)}
      rippleColor="rgba(0, 0, 0, .32)"
    >
      <List.Item
        titleStyle={{ fontWeight: "700", fontSize: 14 }}
        descriptionStyle={{ fontWeight: "300", fontSize: 12 }}
        left={(props) => (
          <View style={{ padding: 5, paddingLeft: 15 }}>
            <Image
              {...props}
              src={`https://c1.coinlore.com/img/${crypto.nameid}.png`}
              style={{ width: 25, height: 25 }}
            />
          </View>
        )}
        right={(props) => (
          <View
            {...props}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text {...props} style={{ fontSize: 12 }}>
              {crypto.price_usd}$
            </Text>
            {crypto.percent_change_1h ===
              "0.00" ? null : crypto.percent_change_1h.startsWith("-") ? (
                <Icon
                  source="trending-down"
                  size={20}
                  color={theme.colors.error}
                />
              ) : (
              <Icon
                source="trending-up"
                size={20}
                color={theme.colors.success}
              />
            )}
            <Text>{crypto.percent_change_1h}%</Text>
          </View>
        )}
        title={crypto.symbol}
        description={crypto.name}
      />
    </TouchableRipple>
  );
};

export default CryptoListItem;
