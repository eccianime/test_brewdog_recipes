import { ITextProps, Text as NBText } from "native-base";

export default function Text(props: ITextProps) {
  return (
    <NBText
      testID="text"
      fontSize={"sm"}
      fontFamily={"body"}
      allowFontScaling={false}
      {...props}
    />
  );
}
