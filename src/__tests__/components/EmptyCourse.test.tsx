import EmptyCourse from "../../components/EmptyCourse";
import { render, screen } from "../../utils/test-utils";
import renderer from "react-test-renderer";

describe("EmptyCourse Component", () => {
  it("snapshot", () => {
    const component = renderer.create(<EmptyCourse />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("img 태그는 해당 속성을 포함한다.", () => {
    render(<EmptyCourse />);
    const img = screen.getByAltText("빈 코스");
    expect(img).toHaveAttribute(
      "src",
      "https://urclass.codestates.com/static/media/emptyContentCover.55f563d7.png"
    );
  });

  it("h1 태그는 해당 텍스트를 포함한다.", () => {
    render(<EmptyCourse />);
    const h1 = screen.getByRole("heading");
    expect(h1).toHaveTextContent("코스가 비어있습니다.");
  });

  it("p 태그는 해당 텍스트를 포함한다.", () => {
    const { container } = render(<EmptyCourse />);
    const p = container.querySelector("p");
    expect(p).toHaveTextContent(
      "자세한 코스 정보는 마이페이지를 확인해주세요."
    );
  });
});
