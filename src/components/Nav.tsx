import styled from "styled-components";
import black_svg from "../assets/icon/codestates2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BREAK_POINT_TABLET } from "../constants/mediaQuery";
import ProfileDropDown from "./ProfileDropDown";
import { useAppDispatch } from "../hooks/reduxHooks";
import { toggleProfileDropDownOpen } from "../reducers/toggleSlice";
import { Link } from "react-router-dom";

const Wrapper = styled.header`
  width: 100%;
  height: 65px;

  .contentsContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 4px 0px;

    .logoContainer {
      height: 100%;
      padding: 12px;
      float: left;
      .logo_icon {
        margin-top: 5px;
        height: 24px;
        cursor: pointer;
      }
    }
  }

  .menuIcon {
    width: 24px;
    height: 24px;
    color: rgb(82, 92, 101);
    margin: 2px 5px;
  }

  .tabContainer {
    display: none;
    position: relative;
  }

  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    .menuIcon {
      display: none;
    }

    .tabContainer {
      display: flex;
      align-items: center;

      button {
        padding: 10px;
        color: ${(props) => props.theme.textColor};
        margin-right: 20px;
        font-size: 15px;
        font-weight: 600;
        border: 0;
        border-radius: 10px;
        outline: 0;
        background-color: ${(props) => props.theme.backgroundColor};
        cursor: pointer;

        &:hover {
          background-color: ${(props) => props.theme.hoverBackgroundColor};
        }
      }

      .jobs {
        font-size: 16px;
      }

      .loginBtn {
        width: 30px;
        height: 30px;
        color: ${(props) => props.theme.textColor};
        cursor: pointer;
      }
    }
  }
`;

const Nav = () => {
  const dispatch = useAppDispatch();
  return (
    <Wrapper>
      <div className="contentsContainer">
        <div className="logoContainer">
          <Link to="/">
            <img src={black_svg} className="logo_icon" alt="logo_icon" />
          </Link>
        </div>
        <nav>
          <GiHamburgerMenu className="menuIcon" />
          <div className="tabContainer">
            <Link to="/course/active" data-testid="link1">
              <button className="tab">수강 중인 코스</button>
            </Link>
            <Link to="/coplit" data-testid="link2">
              <button>코플릿</button>
            </Link>
            <Link to="/job" data-testid="link3">
              <button className="jobs">Jobs</button>
            </Link>
            <IoPersonCircleSharp
              className="loginBtn"
              onMouseOver={() => dispatch(toggleProfileDropDownOpen())}
            />
            <ProfileDropDown />
          </div>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Nav;
