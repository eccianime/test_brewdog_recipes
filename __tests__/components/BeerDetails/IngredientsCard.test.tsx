import React from "react";
import { render } from "@testing-library/react-native";
import { IngredientsCard } from "../../../src/components";
import Provider from "../../../src/config/Provider";
import { BeerDetails } from "../../../src/@types/dto";

beforeAll(() => {
  console.warn = jest.fn();
});
describe("IngredientsCard", () => {
  it("displays the correct text for malt", () => {
    const details = {
      ingredients: {
        malt: [
          {
            name: "Malt 1",
            amount: {
              value: 1,
              unit: "kg",
            },
          },
          {
            name: "Malt 2",
            amount: {
              value: 2,
              unit: "kg",
            },
          },
        ],
        hops: [
          {
            name: "Hops 1",
            amount: {
              value: 10,
              unit: "g",
            },
            add: "Start",
            attribute: "Bitter",
          },
        ],
        yeast: "Yeast 1",
      },
    } as BeerDetails;
    const { getByText } = render(
      <Provider>
        <IngredientsCard details={details} />
      </Provider>
    );
    const text1 = getByText("Malt 1");
    const text2 = getByText("Malt 2");
    expect(text1).toBeTruthy();
    expect(text2).toBeTruthy();
  });

  it("displays the correct text for hops", () => {
    const details = {
      ingredients: {
        malt: [
          {
            name: "Malt 1",
            amount: {
              value: 1,
              unit: "kg",
            },
          },
        ],
        hops: [
          {
            name: "Hops 1",
            amount: {
              value: 10,
              unit: "g",
            },
            add: "Start",
            attribute: "Bitter",
          },
          {
            name: "Hops 2",
            amount: {
              value: 20,
              unit: "g",
            },
            add: "Middle",
            attribute: "Flavor",
          },
        ],
        yeast: "Yeast 1",
      },
    } as BeerDetails;
    const { getByText } = render(
      <Provider>
        <IngredientsCard details={details} />
      </Provider>
    );
    const text1 = getByText("Hops 1");
    const text2 = getByText("Hops 2");
    expect(text1).toBeTruthy();
    expect(text2).toBeTruthy();
  });

  it("displays the correct text for yeast", () => {
    const details = {
      ingredients: {
        malt: [
          {
            name: "Malt 1",
            amount: {
              value: 1,
              unit: "kg",
            },
          },
        ],
        hops: [
          {
            name: "Hops 1",
            amount: {
              value: 10,
              unit: "g",
            },
            add: "Start",
            attribute: "Bitter",
          },
        ],
        yeast: "Yeast 1",
      },
    } as BeerDetails;
    const { getByText } = render(
      <Provider>
        <IngredientsCard details={details} />
      </Provider>
    );
    const text = getByText("Yeast 1");
    expect(text).toBeTruthy();
  });

  it("renders the MaltIcon image", () => {
    const details = {
      ingredients: {
        malt: [
          {
            name: "Malt 1",
            amount: {
              value: 1,
              unit: "kg",
            },
          },
        ],
        hops: [
          {
            name: "Hops 1",
            amount: {
              value: 10,
              unit: "g",
            },
            add: "Start",
            attribute: "Bitter",
          },
        ],
        yeast: "Yeast 1",
      },
    } as BeerDetails;
    const { getByTestId } = render(
      <Provider>
        <IngredientsCard details={details} />
      </Provider>
    );
    const image = getByTestId("MaltIcon");
    expect(image).toBeTruthy();
  });

  it("renders the HopsIcon image", () => {
    const details = {
      ingredients: {
        malt: [
          {
            name: "Malt 1",
            amount: {
              value: 1,
              unit: "kg",
            },
          },
        ],
        hops: [
          {
            name: "Hops 1",
            amount: {
              value: 10,
              unit: "g",
            },
            add: "Start",
            attribute: "Bitter",
          },
        ],
        yeast: "Yeast 1",
      },
    } as BeerDetails;
    const { getByTestId } = render(
      <Provider>
        <IngredientsCard details={details} />
      </Provider>
    );
    const image = getByTestId("HopsIcon");
    expect(image).toBeTruthy();
  });

  it("renders the YeastIcon image", () => {
    const details = {
      ingredients: {
        malt: [
          {
            name: "Malt 1",
            amount: {
              value: 1,
              unit: "kg",
            },
          },
        ],
        hops: [
          {
            name: "Hops 1",
            amount: {
              value: 10,
              unit: "g",
            },
            add: "Start",
            attribute: "Bitter",
          },
        ],
        yeast: "Yeast 1",
      },
    } as BeerDetails;
    const { getByTestId } = render(
      <Provider>
        <IngredientsCard details={details} />
      </Provider>
    );
    const image = getByTestId("YeastIcon");
    expect(image).toBeTruthy();
  });
});
