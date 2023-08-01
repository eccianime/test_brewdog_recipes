import React from "react";
import { render } from "@testing-library/react-native";
import { MethodCard } from "../../../src/components";
import Provider from "../../../src/config/Provider";
import { BeerDetails } from "../../../src/@types/dto";

beforeAll(() => {
  console.warn = jest.fn();
});
describe("MethodCard", () => {
  test("renders the mash temp", () => {
    const details = {
      method: {
        fermentation: {
          temp: {
            value: 65,
            unit: "minutes",
          },
        },
        mash_temp: [
          {
            temp: {
              value: 65,
              unit: "celsius",
            },
            duration: 60,
          },
        ],
        twist: null,
      },
    } as BeerDetails;
    const { getByText } = render(
      <Provider>
        <MethodCard details={details} />
      </Provider>
    );
    const mashTempText = getByText("MASH TEMP");
    const tempValueText = getByText("65ºC");
    const durationText = getByText("60mins");
    expect(mashTempText).toBeDefined();
    expect(tempValueText).toBeDefined();
    expect(durationText).toBeDefined();
  });
});
