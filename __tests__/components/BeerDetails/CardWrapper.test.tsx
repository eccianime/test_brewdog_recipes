import React from "react";
import { render } from "@testing-library/react-native";
import { CardWrapper } from "../../../src/components";
import Provider from "../../../src/config/Provider";

beforeAll(() => {
  console.warn = jest.fn();
});
describe("CardWrapper", () => {
  it("displays the correct text", () => {
    const { getByText } = render(
      <Provider>
        <CardWrapper text="Test Text" />
      </Provider>
    );
    const text = getByText("Test Text");
    expect(text).toBeTruthy();
  });
});
