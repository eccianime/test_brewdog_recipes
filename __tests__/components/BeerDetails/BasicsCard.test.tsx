import { render } from "@testing-library/react-native";
import React from "react";
import { BasicsCard } from "../../../src/components";
import Provider from "../../../src/config/Provider";
import { BeerDetails } from "../../../src/@types/dto";

beforeAll(() => {
  console.warn = jest.fn();
});
// Dummy data for testing
const details = {
  volume: { value: 10, unit: "L" },
  boil_volume: { value: 9, unit: "L" },
  abv: 5,
  target_fg: 1.01,
  target_og: 1.05,
  ebc: 10,
  srm: 5,
  ph: 5.2,
  attenuation_level: 75,
} as BeerDetails;

describe("BasicsCard", () => {
  it("renders the BasicsCard component correctly", () => {
    const { getByText } = render(
      <Provider>
        <BasicsCard details={details} />
      </Provider>
    );

    // Check if the component renders
    expect(getByText("BASICS")).toBeTruthy();

    // Check if each text item is rendered correctly
    expect(getByText("VOLUME")).toBeTruthy();
    expect(getByText("10 L")).toBeTruthy();

    expect(getByText("BOIL VOLUME")).toBeTruthy();
    expect(getByText("9 L")).toBeTruthy();

    expect(getByText("ABV")).toBeTruthy();
    expect(getByText("5%")).toBeTruthy();

    expect(getByText("Target FG")).toBeTruthy();
    expect(getByText("1.01")).toBeTruthy();

    expect(getByText("Target OG")).toBeTruthy();
    expect(getByText("1.05")).toBeTruthy();

    expect(getByText("EBC")).toBeTruthy();
    expect(getByText("10")).toBeTruthy();

    expect(getByText("SRM")).toBeTruthy();
    expect(getByText("5")).toBeTruthy();

    expect(getByText("PH")).toBeTruthy();
    expect(getByText("5.2")).toBeTruthy();

    expect(getByText("ATTENUATION LEVEL")).toBeTruthy();
    expect(getByText("75%")).toBeTruthy();
  });
});
