import { render } from "@testing-library/react-native";
import { Text } from "../../../src/components";
import Provider from "../../../src/config/Provider";
import theme from "../../../src/config/theme";

beforeAll(() => {
  console.warn = jest.fn();
});

const TextDefaultProps = {
  backgroundColor: undefined,
  color: "#171717",
  fontFamily: "HelveticaRegular",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: "400",
  letterSpacing: 0,
  lineHeight: 21,
  textDecorationLine: undefined,
};

describe("Text", () => {
  test("renders without crashing", () => {
    render(
      <Provider>
        <Text />
      </Provider>
    );
  });

  test("renders with correct props", () => {
    const props = {
      children: "Hello world",
      style: { color: "red" },
    };
    const { getByText } = render(
      <Provider>
        <Text {...props} />
      </Provider>
    );
    const text = getByText(props.children);
    expect(text.props.style).toEqual([TextDefaultProps, props.style]);
  });

  test("renders with correct font size", () => {
    const { getByTestId } = render(
      <Provider>
        <Text />
      </Provider>
    );
    const text = getByTestId("text");
    // sm equals 14
    expect(text.props.style.fontSize).toEqual(14);
  });

  test("renders with correct font family", () => {
    const { getByTestId } = render(
      <Provider>
        <Text />
      </Provider>
    );
    const text = getByTestId("text");
    expect(text.props.style.fontFamily).toEqual((theme.fonts as any).body);
  });

  test("does not allow font scaling", () => {
    const { getByTestId } = render(
      <Provider>
        <Text />
      </Provider>
    );
    const text = getByTestId("text");
    expect(text.props.allowFontScaling).toEqual(false);
  });
});
