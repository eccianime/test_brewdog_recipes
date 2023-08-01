import { HStack, Image, VStack } from "native-base";
import CardWrapper from "./CardWrapper";
import TableLine from "./TableLine";
import { CommonCardProps } from "../../@types/components";
import MaltIcon from "../../assets/icons/icon-malt.png";
import HopsIcon from "../../assets/icons/icon-hops.png";
import YeastIcon from "../../assets/icons/icon-yeast.png";
import Text from "../common/Text";

export default function IngredientsCard({ details }: CommonCardProps) {
  const { hops, malt, yeast } = details.ingredients;
  return (
    <CardWrapper text="METHOD/TIMINGS">
      <VStack>
        <HStack alignItems={"center"} mb={1}>
          <Image
            testID="MaltIcon"
            source={MaltIcon}
            alt="MaltIcon"
            h={8}
            w={8}
            mr={3}
          />
          <Text fontSize={"md"} fontFamily={"heading"}>
            MALT
          </Text>
        </HStack>
        <VStack mb={2}>
          {malt.map((ingredient, index) => (
            <TableLine
              key={`${ingredient}-${ingredient.name}-${index}`}
              texts={[
                {
                  item: ingredient.name,
                },
                {
                  item: `${ingredient.amount.value} ${ingredient.amount.unit}`,
                },
              ]}
            />
          ))}
        </VStack>
        <HStack alignItems={"center"} mb={1}>
          <Image
            testID="HopsIcon"
            source={HopsIcon}
            alt="HopsIcon"
            h={8}
            w={8}
            mr={3}
          />
          <Text fontSize={"md"} fontFamily={"heading"}>
            HOPS
          </Text>
        </HStack>
        <VStack mb={2}>
          <TableLine
            texts={[
              {
                item: "",
              },
              {
                item: `(g)`,
                style: {
                  fontFamily: "mono",
                },
              },
              {
                item: "Add",
                style: {
                  fontFamily: "mono",
                },
              },
              {
                item: "Attribute",
                style: {
                  fontFamily: "mono",
                },
              },
            ]}
          />
          {hops.map((ingredient, index) => (
            <TableLine
              key={`${ingredient}-${ingredient.name}-${index}`}
              texts={[
                {
                  item: ingredient.name,
                },
                {
                  item: `${ingredient.amount.value} ${ingredient.amount.unit}`,
                },
                {
                  item: ingredient.add,
                },
                {
                  item: ingredient.attribute,
                },
              ]}
            />
          ))}
        </VStack>
        <HStack alignItems={"center"} mb={1}>
          <Image
            testID="YeastIcon"
            source={YeastIcon}
            alt="YeastIcon"
            h={8}
            w={8}
            mr={3}
          />
          <Text fontSize={"md"} fontFamily={"heading"}>
            YEAST
          </Text>
        </HStack>
        <TableLine
          texts={[
            {
              item: yeast,
            },
          ]}
        />
      </VStack>
    </CardWrapper>
  );
}
