import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 50px;
  width: 80%;
  max-width: 1300px;
  height: 100vh;
  margin: 0 auto 300px auto;

  .tab {
    display: flex;
    align-items: center;
    margin: 30px 0 50px 0;
    height: 40px;
    font-size: 20px;
    font-weight: 900;
    color: ${(props) => props.theme.grayTextColor};
    cursor: pointer;

    .course {
      margin-right: 30px;
      padding: 8px 0;
      text-decoration: none;
      color: ${(props) => props.theme.grayTextColor};
    }

    .focus {
      border-bottom: 2px solid ${(props) => props.theme.textColor};
      color: ${(props) => props.theme.textColor};
    }
  }
`;

const Course = () => {
  return (
    <Wrapper>
      <div className="tab">
        <NavLink
          to="/course/active"
          className={({ isActive }) => (isActive ? "course focus" : "course")}
        >
          수강 중인 코스
        </NavLink>
        <NavLink
          to="/course/scheduled"
          className={({ isActive }) => (isActive ? "course focus" : "course")}
        >
          개강 예정 코스
        </NavLink>
        <NavLink
          to="/course/expired"
          className={({ isActive }) => (isActive ? "course focus" : "course")}
        >
          만료된 코스
        </NavLink>
      </div>
      <Outlet />
    </Wrapper>
  );
};

export default Course;
