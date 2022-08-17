import styled from "styled-components";
import Post from "../../components/Post";
import { BREAK_POINT_PC, BREAK_POINT_TABLET } from "../../constants/mediaQuery";
import { useAppSelector } from "../../hooks/reduxHooks";

const Wrapper = styled.main`
  .tab {
    display: flex;
    align-items: center;
    margin: 30px 0 50px 0;
    height: 40px;
    font-size: 20px;
    font-weight: 900;
    color: ${(props) => props.theme.grayTextColor};
    cursor: pointer;

    span {
      margin-right: 30px;
      padding: 8px 0;
    }

    .focus {
      border-bottom: 2px solid ${(props) => props.theme.textColor};
      color: ${(props) => props.theme.textColor};
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    li {
      flex: 100%;
      height: 400px;
    }
  }

  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    height: auto;
    ul > li {
      flex-basis: 43%;
    }
  }

  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    height: auto;
    ul > li {
      flex-basis: 30%;
      height: auto;
    }
  }
`;

const Active = () => {
  const courses = useAppSelector((state) => state.course);

  return (
    <Wrapper>
      <ul>
        {courses.map((course) => (
          <Post key={course.id} {...course} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default Active;
