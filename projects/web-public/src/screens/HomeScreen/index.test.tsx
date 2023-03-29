import { ReactNode } from "react";
import HomeScreen from ".";
import { customRender } from "@alura/test-commons/react-testing-library";

function CustomWrapper({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}

const render = customRender(CustomWrapper);

describe("<HomeScreen />", () => {
  it("renders the page", () => {
    const { container } = render(<HomeScreen />);
    expect(container).toMatchSnapshot();
  });
});
