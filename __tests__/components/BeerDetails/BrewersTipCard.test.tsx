import { render } from "@testing-library/react-native";
import React from "react";
import { BrewersTipCard } from "../../../src/components";
import Provider from "../../../src/config/Provider";
import { BeerDetails } from "../../../src/@types/dto";

beforeAll(() => {
  console.warn = jest.fn();
});
describe("BrewersTipCard", () => {
  it("renders the TipIcon image", () => {
    const details = { brewers_tips: "Some tips" };
    const { getByTestId } = render(
      <Provider>
        <BrewersTipCard details={details as any} />
      </Provider>
    );
    const tipIcon = getByTestId("tip-icon");
    expect(tipIcon).toBeTruthy();
  });

  it("renders the CardWrapper component with the correct text prop", () => {
    const details = { brewers_tips: "Some tips" };
    const { getByText } = render(
      <Provider>
        <BrewersTipCard details={details as any} />
      </Provider>
    );
    const cardWrapper = getByText("BREWER'S TIP");
    expect(cardWrapper).toBeTruthy();
  });

  it("renders the Text component with the correct brewers_tips prop", () => {
    const details = { brewers_tips: "Some tips" } as BeerDetails;
    const { getByText } = render(
      <Provider>
        <BrewersTipCard details={details} />
      </Provider>
    );
    const text = getByText("Some tips");
    expect(text).toBeTruthy();
  });
});
