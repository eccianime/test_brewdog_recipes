import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import PaginationButton from "../../../src/components/BeerList/PaginationButton";
import Provider from "../../../src/config/Provider";

beforeAll(() => {
  console.warn = jest.fn();
});

describe("PaginationButton", () => {
  it("renders the button with the correct text", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Provider>
        <PaginationButton onPress={onPressMock} text="Next" />
      </Provider>
    );
    const buttonText = getByText("Next");
    expect(buttonText).toBeDefined();
  });

  it("calls the onPress function when the button is pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Provider>
        <PaginationButton onPress={onPressMock} text="Next" />
      </Provider>
    );
    const button = getByText("Next");
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });

  it("hiddens the button when isDisabled prop is true", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Provider>
        <PaginationButton
          testID="test-button"
          onPress={onPressMock}
          text="Next"
          isDisabled={true}
        />
      </Provider>
    );
    const button = getByTestId("test-button");

    expect(button.props.style.opacity).toEqual(0);
  });
});
