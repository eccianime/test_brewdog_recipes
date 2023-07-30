import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BeerDetails, BeerList } from "../screens/beer";
import { BeerParamList } from "../@types/navigator";

const { Navigator, Screen } = createNativeStackNavigator<BeerParamList>();

export default function BeerStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#FFF",
        },
      }}
    >
      <Screen name="Beer List" component={BeerList} />
      <Screen name="Beer Details" component={BeerDetails} />
    </Navigator>
  );
}
