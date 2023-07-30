import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider } from "native-base";
import { useCallback, useEffect, useState } from "react";
import { LogBox, SafeAreaView, StatusBar } from "react-native";
import { Provider } from "react-redux";

import AppStack from "./src/navigator/BeerStack";
import store from "./src/redux/store";
import theme from "./src/config/theme";

SplashScreen.preventAutoHideAsync();

LogBox.ignoreLogs([
  "In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.",
]);

export default function App() {
  const [isAppReady, setAppReady] = useState(false);

  async function _loadAssetsAsync() {
    await Font.loadAsync({
      Pathway: require("./src/assets/fonts/PathwayGothicOne-Regular.ttf"),
      HelveticaRegular: require("./src/assets/fonts/HelveticaNeueRegular.ttf"),
      HelveticaBold: require("./src/assets/fonts/HelveticaNeueBold.ttf"),
    });
    setAppReady(true);
  }

  useEffect(() => {
    _loadAssetsAsync();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null;
  }
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Provider store={store}>
          <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <AppStack />
          </SafeAreaView>
        </Provider>
        <StatusBar barStyle={"light-content"} backgroundColor="#000" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
