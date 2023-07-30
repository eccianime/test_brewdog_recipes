import { VStack } from "native-base";
import CardWrapper from "./CardWrapper";
import TableLine from "./TableLine";
import { CommonCardProps } from "../../@types/components";

export default function BasicsCard({ details }: CommonCardProps) {
  const commonLeftStyle = {
    color: "black",
    fontFamily: "mono",
  };
  const textItems = [
    [
      {
        item: "VOLUME",
        style: commonLeftStyle,
      },
      {
        item: `${details.volume.value} ${details.volume.unit}`,
      },
    ],
    [
      {
        item: "BOIL VOLUME",
        style: commonLeftStyle,
      },
      {
        item: `${details.boil_volume.value} ${details.boil_volume.unit}`,
      },
    ],
    [
      {
        item: "ABV",
        style: commonLeftStyle,
      },
      {
        item: `${details.abv}%`,
      },
    ],
    [
      {
        item: "Target FG",
        style: commonLeftStyle,
      },
      {
        item: `${details.target_fg}`,
      },
    ],
    [
      {
        item: "Target OG",
        style: commonLeftStyle,
      },
      {
        item: `${details.target_og}`,
      },
    ],
    [
      {
        item: "EBC",
        style: commonLeftStyle,
      },
      {
        item: `${details.ebc}`,
      },
    ],
    [
      {
        item: "SRM",
        style: commonLeftStyle,
      },
      {
        item: `${details.srm}`,
      },
    ],
    [
      {
        item: "PH",
        style: commonLeftStyle,
      },
      {
        item: `${details.ph}`,
      },
    ],
    [
      {
        item: "ATTENUATION LEVEL",
        style: commonLeftStyle,
      },
      {
        item: `${details.attenuation_level}%`,
      },
    ],
  ];
  return (
    <CardWrapper text="BASICS">
      <VStack>
        {textItems.map((item, index) => (
          <TableLine
            key={`table-line-${item[0].item}`}
            texts={item}
            hasLine={index < textItems.length - 1}
          />
        ))}
      </VStack>
    </CardWrapper>
  );
}
