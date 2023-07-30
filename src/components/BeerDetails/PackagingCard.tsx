import { Image, VStack } from "native-base";
import { PackagingCardProps } from "../../@types/components";
import Text from "../common/Text";
import { Dimensions } from "react-native";

export default function PackagingCard({ image }: PackagingCardProps) {
  const { height } = Dimensions.get("screen");
  return (
    <>
      <Text fontSize={"lg"} fontFamily={"heading"} mb={1}>
        {"PACKAGING"}
      </Text>
      <VStack borderTopWidth={2} bg="gray.500" mb={2}>
        {image && (
          <Image
            my={4}
            style={{
              objectFit: "contain",
            }}
            alt="PACKAGING IMAGE"
            source={{ uri: image }}
            flex={1}
            h={height / 2}
          />
        )}
      </VStack>
    </>
  );
}
