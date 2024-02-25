import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ChangingListProps } from "./ChangingList.types";
import { Icon, List } from "react-native-paper";
import useAppTheme from "hooks/useAppTheme/useAppTheme";

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

const ChangingList: FC<ChangingListProps> = ({
  change1h,
  change24h,
  change7d,
}) => {
  const theme = useAppTheme();

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Изменения</Text>
      <View>
        <List.Item
          title="За час"
          right={(props) => (
            <>
              <View
                {...props}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                {change1h.startsWith("-") ? (
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
                <Text>{change1h}%</Text>
              </View>
            </>
          )}
        />
        <List.Item
          title="За 24 часа"
          right={(props) => (
            <>
              <View
                {...props}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                {change24h.startsWith("-") ? (
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
                <Text>{change24h}%</Text>
              </View>
            </>
          )}
        />
        <List.Item
          title="За неделю"
          right={(props) => (
            <>
              <View
                {...props}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                {change7d.startsWith("-") ? (
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
                <Text>{change7d}%</Text>
              </View>
            </>
          )}
        />
      </View>
    </View>
  );
};

export default ChangingList;
