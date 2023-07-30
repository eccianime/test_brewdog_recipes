import { Center, Spinner, useTheme } from "native-base";

export default function Loader() {
  const { colors } = useTheme();
  return (
    <Center flex={1}>
      <Spinner size={100} color={colors.primary[500]} />
    </Center>
  );
}
