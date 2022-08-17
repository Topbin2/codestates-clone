import renderer from "react-test-renderer";
import Footer from "../../components/Footer";
import { render } from "../../utils/test-utils";

describe("Footer", () => {
  it("snapshot", () => {
    const component = renderer.create(<Footer />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("span 태그는 해당 텍스트를 포함한다.", () => {
    const { container } = render(<Footer />);
    const span = container.querySelector("span");
    expect(span).toHaveTextContent("© Copyright ⓒ 2022 CodeStates");
  });
});
