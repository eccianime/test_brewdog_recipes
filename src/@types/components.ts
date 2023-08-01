import { IPressableProps, ITextProps } from "native-base";
import { BeerDetails } from "./dto";
import { IVStackProps } from "native-base/lib/typescript/components/primitives/Stack/VStack";

export type PaginationButtonProps = IPressableProps & {
  isDisabled?: boolean;
  onPress: VoidFunction;
  text: string;
};

export type SimpleCardProps = {
  text: string;
  children?: React.ReactElement;
};

export type TableLineProps = IVStackProps & {
  texts: {
    item: string;
    style?: ITextProps;
  }[];
  hasLine?: boolean;
};

export type PackagingCardProps = {
  image: string | null;
};

export type CommonCardProps = { details: BeerDetails };
