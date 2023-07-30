import { HStack, Image, VStack } from "native-base";
import CardWrapper from "./CardWrapper";
import TableLine from "./TableLine";
import { CommonCardProps } from "../../@types/components";
import MashIcon from "../../assets/icons/icon-mash.png";
import FermentationIcon from "../../assets/icons/icon-fermetation.png";
import TwistIcon from "../../assets/icons/icon-twist.png";
import Text from "../common/Text";

export default function MethodCard({ details }: CommonCardProps) {
  const { fermentation, mash_temp, twist } = details.method;
  return (
    <CardWrapper text="METHOD/TIMINGS">
      <VStack>
        <HStack alignItems={"center"} mb={1}>
          <Image source={MashIcon} alt="MashIcon" h={8} w={8} mr={3} />
          <Text fontSize={"md"} fontFamily={"heading"}>
            MASH TEMP
          </Text>
        </HStack>
        <TableLine
          texts={[
            {
              item: `${mash_temp[0].temp.value}º${mash_temp[0].temp.unit
                .toUpperCase()
                .charAt(0)}`,
            },
            {
              item: mash_temp[0].duration ? `${mash_temp[0].duration}mins` : "",
            },
          ]}
        />
        <HStack alignItems={"center"} mb={1}>
          <Image
            source={FermentationIcon}
            alt="FermentationIcon"
            h={8}
            w={8}
            mr={3}
          />
          <Text fontSize={"md"} fontFamily={"heading"}>
            FERMENTATION
          </Text>
        </HStack>
        <TableLine
          texts={[
            {
              item: `${fermentation.temp.value}º${fermentation.temp.unit
                .toUpperCase()
                .charAt(0)}`,
            },
          ]}
        />
        {twist && twist?.length > 0 && (
          <>
            <HStack alignItems={"center"} mb={1}>
              <Image source={TwistIcon} alt="TwistIcon" h={8} w={8} mr={3} />
              <Text fontSize={"md"} fontFamily={"heading"}>
                TWIST
              </Text>
            </HStack>
            <TableLine
              texts={[
                {
                  item: twist,
                },
              ]}
            />
          </>
        )}
      </VStack>
    </CardWrapper>
  );
}
