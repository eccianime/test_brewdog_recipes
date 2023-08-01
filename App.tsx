import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Provider } from "react-redux";
// This is because I needed to turn off a warning the developer hasn't corrected at the time of this code
import { NativeBaseProvider } from "./custom_modules/NativeBaseProvider";

import theme from "./src/config/theme";
import AppStack from "./src/navigator/BeerStack";
import store from "./src/redux/store";

SplashScreen.preventAutoHideAsync();

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
