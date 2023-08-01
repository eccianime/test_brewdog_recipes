import { render } from "@testing-library/react-native";
import { Loader } from "../../../src/components";
import Provider from "../../../src/config/Provider";
import theme from "../../../src/config/theme";

beforeAll(() => {
  console.warn = jest.fn();
});

describe("Loader", () => {
  it("should render the Spinner component with the correct props", () => {
    const { getByTestId } = render(
      <Provider>
        <Loader />
      </Provider>
    );
    const spinner = getByTestId("loader-spinner");
    expect(spinner.props.size).toBe(100);
    expect(spinner.props.color).toBe(theme.colors.primary[500]);
  });
});
