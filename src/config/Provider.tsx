// THIS IS ONLY FOR TESTING PURPOSES
import { NativeBaseProvider } from "native-base";
import theme from "./theme";

export default function Provider({
  children,
}: {
  children: React.ReactElement;
}) {
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };

  return (
    <NativeBaseProvider initialWindowMetrics={inset} theme={theme}>
      {children}
    </NativeBaseProvider>
  );
}
