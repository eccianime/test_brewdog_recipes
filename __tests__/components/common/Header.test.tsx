// Header.test.tsx
import React from "react";
import { render } from "@testing-library/react-native";
import { Header } from "../../../src/components";
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
  lineHeight: 45,
  textDecorationLine: undefined,
};

describe("Header", () => {
  it("renders the header component with the correct text", () => {
    const { getByText } = render(
      <Provider>
        <Header />
      </Provider>
    );
    const headerText = getByText("BREWDOG RECIPES");
    expect(headerText).toBeTruthy();
  });

  it("renders the header component with the correct logo", () => {
    const { getByTestId } = render(
      <Provider>
        <Header />
      </Provider>
    );
    const logo = getByTestId("logo-test-id");
    expect(logo).toBeTruthy();
  });

  it("renders the header component with the correct background color", () => {
    const { getByTestId } = render(
      <Provider>
        <Header />
      </Provider>
    );
    const headerContainer = getByTestId("header-container");
    expect(headerContainer.props.style.backgroundColor).toEqual("#000000");
  });

  it("renders the header component with the correct font size, family, and color", () => {
    const { getByText } = render(
      <Provider>
        <Header />
      </Provider>
    );
    const headerText = getByText("BREWDOG RECIPES");
    expect(headerText.props.style).toEqual({
      ...TextDefaultProps,
      fontSize: 30,
      fontFamily: (theme.fonts as any).heading,
      color: "#FFFFFF",
    });
  });

  it("renders the header component with the correct logo width and height 10 = 40", () => {
    const { getByTestId } = render(
      <Provider>
        <Header />
      </Provider>
    );
    const logo = getByTestId("logo-test-id");
    expect(logo.props.style.width).toEqual(40);
    expect(logo.props.style.height).toEqual(40);
  });

  it("renders the header component with the correct margin mr:3 = 12  for the logo", () => {
    const { getByTestId } = render(
      <Provider>
        <Header />
      </Provider>
    );
    const logo = getByTestId("logo-test-id");
    expect(logo.props.style.marginRight).toEqual(12);
  });
});
