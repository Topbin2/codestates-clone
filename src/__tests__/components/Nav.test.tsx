import Nav from "../../components/Nav";
import { render, screen } from "../../utils/test-utils";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import setupStore from "../../store/store";
import { BrowserRouter as Router } from "react-router-dom";

describe("Nav", () => {
  it("snapshot", () => {
    const component = renderer.create(
      <Provider store={setupStore()}>
        <Router>
          <Nav />
        </Router>
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("nav menu 버튼은 해당 속성을 포함한다.", () => {
    render(<Nav />);
    const logo = screen.getByRole("link");
    const tab1 = screen.getByTestId("link1");
    const tab2 = screen.getByTestId("link2");
    const tab3 = screen.getByTestId("link3");

    expect(logo).toHaveAttribute("href", "/");
    expect(tab1).toHaveAttribute("href", "/course/active");
    expect(tab2).toHaveAttribute("href", "/coplit");
    expect(tab3).toHaveAttribute("href", "/job");
  });
});
