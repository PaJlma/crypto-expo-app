import CryptoScreen from "components/screens/CryptoScreen/CryptoScreen";
import LoadingScreen from "components/screens/LoadingScreen/LoadingScreen";
import NoInternetScreen from "components/screens/NoInternetScreen/NoInternetScreen";
import { Stack, useLocalSearchParams } from "expo-router";
import { FC, useEffect, useState } from "react";
import { useGetCryptoByIdQuery } from "store/services/crypto.service";
import NetInfo from "@react-native-community/netinfo";

const CryptoPage: FC = (props) => {
  const { cryptoId } = useLocalSearchParams();
  const { data, isError, isLoading } = useGetCryptoByIdQuery(
    cryptoId as string,
  );
  const [isConnected, setIsConnected] = useState(true);

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
        data && (
          <>
            <Stack.Screen
              options={{
                title: `${data[0].name} (${data[0].symbol})`,
              }}
            />
            <CryptoScreen crypto={data[0]} />
          </>
        )
      )}
    </>
  );
};

export default CryptoPage;
