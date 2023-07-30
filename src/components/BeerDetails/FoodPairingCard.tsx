import { Image, VStack } from "native-base";
import { CommonCardProps } from "../../@types/components";
import FoodIcon from "../../assets/icons/icon-food-pairing.png";
import CardWrapper from "./CardWrapper";
import TableLine from "./TableLine";

export default function FoodPairingCard({ details }: CommonCardProps) {
  return (
    <CardWrapper text="FOOD PAIRING">
      <VStack>
        <Image source={FoodIcon} alt="FoodIcon" h={8} w={8} mr={3} mb={1} />
        {details.food_pairing.map((item) => (
          <TableLine
            key={`food_pairing-${item}`}
            texts={[
              {
                item,
              },
            ]}
          />
        ))}
      </VStack>
    </CardWrapper>
  );
}
