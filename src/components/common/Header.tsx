import { HStack, Image } from "native-base";
import BrewdogLogo from "../../assets/images/logo.png";
import Text from "./Text";

export default function Header() {
  return (
    <HStack bg="black" px={4} py={2} alignItems={"center"}>
      <Image alt={"logo"} source={BrewdogLogo} w={10} h={10} mr={3} />
      <Text fontSize={"3xl"} fontFamily={"heading"} color={"white"}>
        BREWDOG RECIPES
      </Text>
    </HStack>
  );
}
