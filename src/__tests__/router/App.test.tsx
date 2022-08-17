import App from "../../App";
import { render, screen } from "../../utils/test-utils";

describe("route", () => {
  it("'/' path는 Main 컴포넌트가 렌더링 된다.", () => {
    render(<App />, { route: "/" });
    expect(screen.getByText(/magazine/i)).toBeInTheDocument();
  });

  it("'/coplit' path는 Coplit 컴포넌트가 렌더링 된다.", () => {
    const { container } = render(<App />, { route: "/coplit" });
    const result = container.querySelector(".lds-ring");
    expect(result).toBeInTheDocument();
  });

  it("'/job' path는 Job 컴포넌트가 렌더링 된다.", () => {
    const { container } = render(<App />, { route: "/job" });
    const result = container.querySelector(".lds-ring");
    expect(result).toBeInTheDocument();
  });

  it("'/course' path는 Course 컴포넌트가 렌더링 된다.", () => {
    render(<App />, { route: "/course" });
    const tabs = screen.getAllByRole("link");
    expect(tabs[1]).toHaveTextContent("수강 중인 코스");
    expect(tabs[2]).toHaveTextContent("개강 예정 코스");
    expect(tabs[3]).toHaveTextContent("만료된 코스");
  });
});
