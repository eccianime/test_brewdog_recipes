import { ITextProps } from "native-base";
import { BeerDetails } from "./dto";

export type PaginationButtonProps = {
  isDisabled: boolean;
  onPress: VoidFunction;
  text: string;
};

export type SimpleCardProps = {
  text: string;
  children: React.ReactElement;
};

export type TableLineProps = {
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
