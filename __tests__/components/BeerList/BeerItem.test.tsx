import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import React from "react";
import { BeerItem } from "../../../src/components";
import Provider from "../../../src/config/Provider";

beforeAll(() => {
  console.warn = jest.fn();
});
describe("BeerItem", () => {
  it("renders the correct text", () => {
    const { getByText } = render(
      <Provider>
        <NavigationContainer>
          <BeerItem id={1} name="Beer Name" description="Beer Description" />
        </NavigationContainer>
      </Provider>
    );
    expect(getByText("#1")).toBeDefined();
    expect(getByText("Beer Name")).toBeDefined();
    expect(getByText("Beer Description")).toBeDefined();
  });

  it("displays the image when an image prop is passed", () => {
    const image_url = "https://example.com/image.jpg";
    const { getByTestId } = render(
      <Provider>
        <NavigationContainer>
          <BeerItem
            id={1}
            name="Beer Name"
            description="Beer Description"
            image_url={image_url}
          />
        </NavigationContainer>
      </Provider>
    );
    expect(getByTestId("Beer Name")).toBeDefined();
  });
});
