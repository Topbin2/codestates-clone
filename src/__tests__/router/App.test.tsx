import App from "../../App";
import { render, screen } from "../../utils/test-utils";

describe("route", () => {

  it("'/' path는 Main 페이지가 렌더링 된다.", () => {
    render(<App />);
    expect(screen.getByText(/magazine/i)).toBeInTheDocument();
  });
});
