import { HStack, Image, VStack } from "native-base";
import { CommonCardProps } from "../../@types/components";
import TipIcon from "../../assets/icons/icon-tip.png";
import Text from "../common/Text";
import CardWrapper from "./CardWrapper";

export default function BrewersTipCard({ details }: CommonCardProps) {
  return (
    <CardWrapper text="BREWER'S TIP">
      <VStack>
        <HStack alignItems={"center"} mb={1}>
          <Image
            testID="tip-icon"
            source={TipIcon}
            alt="TipIcon"
            h={8}
            w={8}
            mr={3}
          />
          <Text flex={1} color={"gray.400"}>
            {details.brewers_tips}
          </Text>
        </HStack>
      </VStack>
    </CardWrapper>
  );
}
