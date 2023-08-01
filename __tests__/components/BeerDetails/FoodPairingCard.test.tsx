import React from "react";
import { render } from "@testing-library/react-native";
import { FoodPairingCard } from "../../../src/components";
import { BeerDetails } from "../../../src/@types/dto";
import Provider from "../../../src/config/Provider";

beforeAll(() => {
  console.warn = jest.fn();
});
describe("FoodPairingCard", () => {
  it("displays the correct text", () => {
    const details = { food_pairing: ["Food 1", "Food 2"] } as BeerDetails;
    const { getByText } = render(
      <Provider>
        <FoodPairingCard details={details} />
      </Provider>
    );
    const text1 = getByText("Food 1");
    const text2 = getByText("Food 2");
    expect(text1).toBeTruthy();
    expect(text2).toBeTruthy();
  });
});
