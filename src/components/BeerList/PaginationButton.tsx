import { Pressable } from "native-base";
import { PaginationButtonProps } from "../../@types/components";
import Text from "../common/Text";

export default function PaginationButton({
  isDisabled,
  onPress,
  text,
  ...props
}: PaginationButtonProps) {
  return (
    <Pressable
      opacity={isDisabled ? 0 : 1}
      bg={"black"}
      disabled={isDisabled}
      onPress={onPress}
      _pressed={{ opacity: 0.2 }}
      w={"1/4"}
      borderRadius={"md"}
      alignItems={"center"}
      justifyContent={"center"}
      h={10}
      {...props}
    >
      <Text fontSize={"lg"} color="white" fontFamily={"mono"}>
        {text}
      </Text>
    </Pressable>
  );
}
