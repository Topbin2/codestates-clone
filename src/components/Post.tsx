import styled from "styled-components";
import { GrView } from "react-icons/gr";
import { BREAK_POINT_PC, BREAK_POINT_TABLET } from "../constants/mediaQuery";

const Wrapper = styled.li<{ url: string }>`
  display: flex;
  flex-direction: column;
  height: 600px;
  cursor: pointer;

  .imgContainer {
    width: 100%;
    height: 230px;
    overflow: hidden;
    background-image: url(${(props) => props.url});
    background-size: cover;
    border-radius: 20px;

    &:hover {
      opacity: 50%;
    }
  }

  h1 {
    margin: 0;
    padding: 10px;
    height: 70px;
    color: ${(props) => props.theme.textColor};
    font-size: 25px;
    font-weight: 900;
    overflow: hidden;
  }

  p {
    height: 97px;
    padding: 10px;
    color: ${(props) => props.theme.grayTextColor};
    font-size: 14px;
    font-weight: 700;
    overflow: hidden;
  }

  .views {
    display: flex;
    padding: 0 10px;
    color: ${(props) => props.theme.lightGrayTextColor};

    span {
      margin-left: 10px;
      font-weight: 600;
    }
  }

  .view path {
    stroke: ${(props) => props.theme.lightGrayTextColor};
  }

  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
  }

  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
  }
`;

interface IProps {
  title: String;
  body: String;
  views?: number;
  url: string;
}

const Post: React.FC<IProps> = ({ title, body, views, url }) => {
  return (
    <Wrapper url={url}>
      <div className="imgContainer" />
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      {views && (
        <div className="views">
          <GrView className="view" />
          <span>{views}</span>
        </div>
      )}
    </Wrapper>
  );
};

export default Post;
