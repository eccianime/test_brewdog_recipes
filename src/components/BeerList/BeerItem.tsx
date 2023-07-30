import { HStack, Image, Pressable, VStack } from "native-base";
import { Beer } from "../../@types/dto";
import { useAppNavigation } from "../../hooks";
import Text from "../common/Text";

export default function BeerItem({ id, name, image_url, description }: Beer) {
  const { navigate } = useAppNavigation();
  return (
    <Pressable
      flexDir={"row"}
      _pressed={{ bg: "primary.400" }}
      py={3}
      px={2}
      bg={id % 2 === 0 ? "gray.500" : "white"}
      onPress={() => navigate("Beer Details", { beer_id: id })}
    >
      {image_url && image_url?.length > 0 && (
        <Image
          style={{
            objectFit: "contain",
          }}
          alt={name}
          source={{ uri: image_url }}
          w={"64px"}
          h={"125px"}
          mr={3}
        />
      )}
      <VStack flex={1}>
        <HStack>
          <Text
            fontWeight={500}
            fontFamily={"heading"}
            fontSize={"2xl"}
            color={"primary.500"}
          >
            {`#${id} `}
          </Text>
          <Text color="black" fontSize={"2xl"} fontFamily={"heading"}>
            {name}
          </Text>
        </HStack>
        <Text fontSize={"xs"} numberOfLines={5}>
          {description}
        </Text>
      </VStack>
    </Pressable>
  );
}
