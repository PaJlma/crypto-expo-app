import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { AppTheme } from "hooks/useAppTheme/useAppTheme.types";
import { FC } from "react";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { store } from "store/store";

const theme: AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    success: "#66bb6a",
  },
};

const Layout: FC = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar style="auto" />
        <Stack>
          <Stack.Screen
            name="index"
            options={{ title: "Список Криптовалют" }}
          />
          <Stack.Screen name="crypto/[cryptoId]" options={{ title: "" }} />
        </Stack>
      </PaperProvider>
    </Provider>
  );
};

export default Layout;
