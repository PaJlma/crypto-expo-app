import { FC, useCallback, useEffect, useState } from "react";
import { HomeScreenProps } from "./HomeScreen.types";
import { RefreshControl, ScrollView } from "react-native";
import { useGetCryptoListQuery } from "store/services/crypto.service";
import CryptoListItem from "components/ui/CryptoListItem/CryptoListItem";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import NoInternetScreen from "../NoInternetScreen/NoInternetScreen";
import NetInfo from "@react-native-community/netinfo";

const HomeScreen: FC<HomeScreenProps> = (props) => {
  const { data, isError, isLoading, refetch } = useGetCryptoListQuery();
  const [isConnected, setIsConnected] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((connection) => {
      setIsConnected(!!connection.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {!isConnected ? (
        <NoInternetScreen />
      ) : isLoading ? (
        <LoadingScreen />
      ) : isError ? (
        "Обшимбка"
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {data &&
            data.data.map((crypto) => (
              <CryptoListItem key={crypto.id} crypto={crypto} />
            ))}
        </ScrollView>
      )}
    </>
  );
};

export default HomeScreen;
