import React from "react";
import { render } from "@testing-library/react-native";
import { PackagingCard } from "../../../src/components";
import Provider from "../../../src/config/Provider";

beforeAll(() => {
  console.warn = jest.fn();
});
describe("PackagingCard", () => {
  it("renders the correct text", () => {
    const image = "https://example.com/image.jpg";
    const { getByText } = render(
      <Provider>
        <PackagingCard image={image} />
      </Provider>
    );
    expect(getByText("PACKAGING")).toBeDefined();
  });

  it("displays the image when an image prop is passed", () => {
    const image = "https://example.com/image.jpg";
    const { getByTestId } = render(
      <Provider>
        <PackagingCard image={image} />
      </Provider>
    );
    expect(getByTestId("PACKAGING_IMAGE")).toBeDefined();
  });
});
