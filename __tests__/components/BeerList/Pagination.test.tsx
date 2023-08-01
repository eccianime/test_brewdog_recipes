import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider as RProvider } from "react-redux";
import configureStore from "redux-mock-store";
import { Pagination } from "../../../src/components";
import Provider from "../../../src/config/Provider";
import { ListTypes } from "../../../src/@types/redux_tsa";

beforeAll(() => {
  console.warn = jest.fn();
});
describe("Pagination", () => {
  const mockStore = configureStore([]);
  const initialState = {
    list: {
      currentPage: 1,
    },
  };
  const store = mockStore(initialState);

  it("renders the current page number", () => {
    const { getByText } = render(
      <Provider>
        <RProvider store={store}>
          <Pagination />
        </RProvider>
      </Provider>
    );
    const currentPageText = getByText("Page 1");
    expect(currentPageText).toBeDefined();
  });

  it("calls setCurrentPage when clicking the Next button", () => {
    const { getByText } = render(
      <Provider>
        <RProvider store={store}>
          <Pagination />
        </RProvider>
      </Provider>
    );
    const nextButton = getByText("Next");
    fireEvent.press(nextButton);
    const actions = store.getActions();
    expect(actions).toEqual([
      { type: ListTypes.SET_CURRENT_PAGE, payload: { page: 2 } },
    ]);
  });
});
