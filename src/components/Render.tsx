import { useCallback, useState } from "react";
import styled from "styled-components";
import { BREAK_POINT_PC, BREAK_POINT_TABLET } from "../constants/mediaQuery";
import { getPosts } from "../actions/postActions";
import Post from "./Post";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { sortByViews } from "../reducers/postSlice";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import DarkModeToggle from "react-dark-mode-toggle";
import { toggleDarkMode } from "../reducers/toggleSlice";
import { Link } from "react-router-dom";

const Wrapper = styled.main<{ selected: boolean }>`
  margin: 0 auto;
  max-width: 1250px;

  h3 {
    margin: 40px 0 0 0;
    font-weight: 800;
    font-size: 20px;
    color: ${(props) => props.theme.textColor};
  }

  .courseInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    margin-top: 25px;
    padding: 20px;
    color: ${(props) => props.theme.textColor};
    border: 1px solid rgb(242, 244, 247);
    border-radius: 12px;
    box-shadow: rgb(0 0 0 / 20%) 2px 2px 10px;
    font-size: 15px;
    font-weight: 400;

    .courseLink {
      color: #1890ff;
      margin-left: 15px;
      font-weight: 600;
      cursor: pointer;
    }
  }

  .sortText {
    margin: 25px 0;
    color: ${(props) => props.theme.lightGrayTextColor};
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;

    .viewFirst {
      color: ${(props) => props.selected && "#5E85E8"};
    }

    .newFirst {
      color: ${(props) => !props.selected && "#5E85E8"};
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    li {
      flex: 100% 1 1;
      height: 400px;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
    min-width: 375px;
    padding: 20px;
    .courseInfoText {
      display: none;
    }
  }

  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    width: 90%;
    ul > li {
      flex-basis: 43%;
    }
  }

  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: 65%;
    ul > li {
      flex-basis: 31%;
    }
  }
`;

const Render = () => {
  const [selected, setSelected] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { posts, sortedPosts } = useAppSelector((state) => state.post);
  const { darkMode } = useAppSelector((state) => state.toggle);

  const setObservationTarget = useInfiniteScroll(() => dispatch(getPosts()));

  const sortByNew = useCallback(() => {
    setSelected(false);
  }, []);

  const sortByView = useCallback(() => {
    setSelected(true);
    dispatch(sortByViews());
  }, [dispatch]);

  return (
    <Wrapper selected={selected}>
      <h3>Into your course</h3>
      <div className="courseInfo">
        <p>
          <span className="courseInfoText">
            [SEB FE] Section 4 / Unit1 - HTML / CSS 심화
          </span>
          <Link to="/course/active">
            <span className="courseLink">학습하러 가기</span>
          </Link>
        </p>
        <DarkModeToggle
          className="toggleBtn"
          size={50}
          checked={darkMode}
          onChange={() => dispatch(toggleDarkMode())}
        />
      </div>
      <h3>Magazine</h3>
      <div className="sortText">
        <span className="newFirst" onClick={sortByNew}>
          최신순
        </span>{" "}
        |{" "}
        <span className="viewFirst" onClick={sortByView}>
          조회순
        </span>
      </div>
      <ul>
        {selected
          ? sortedPosts.map((post) => <Post key={post.id} {...post} />)
          : posts.map((post) => <Post key={post.id} {...post} />)}
      </ul>
      <div ref={setObservationTarget}></div>
    </Wrapper>
  );
};

export default Render;
