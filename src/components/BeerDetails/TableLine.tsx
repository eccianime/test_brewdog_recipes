import { HStack } from "native-base";
import Text from "../common/Text";
import { TableLineProps } from "../../@types/components";

export default function TableLine({ texts, hasLine = true }: TableLineProps) {
  return (
    <HStack
      py={2}
      mb={hasLine ? 2 : 0}
      borderBottomColor={"gray.400"}
      borderBottomWidth={hasLine ? 1 : 0}
    >
      {texts.map((text, index) => (
        <Text
          flex={1}
          textAlign={index === 0 ? "left" : "center"}
          key={`text-line-${index}-${text}`}
          color={"gray.400"}
          {...text.style}
        >
          {text.item}
        </Text>
      ))}
    </HStack>
  );
}
