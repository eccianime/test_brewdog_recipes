import { VStack } from "native-base";
import Text from "../common/Text";
import { SimpleCardProps } from "../../@types/components";

export default function CardWrapper({ text, children }: SimpleCardProps) {
  return (
    <>
      <Text fontSize={"lg"} fontFamily={"heading"} mb={1}>
        {text}
      </Text>
      <VStack borderTopWidth={2} bg="gray.500" p={3} mb={3}>
        {children}
      </VStack>
    </>
  );
}
