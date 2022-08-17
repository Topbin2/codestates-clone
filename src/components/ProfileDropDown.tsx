import { MdOutlineHeadset, MdLogout } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { toggleProfileDropDownClose } from "../reducers/toggleSlice";

const Wrapper = styled.div<{ profileDropDown: boolean }>`
  display: ${(props) => (props.profileDropDown ? "flex" : "none")};
  flex-direction: column;
  width: 220px;
  height: 230px;
  position: absolute;
  top: 40px;
  right: 0;
  border: 1px solid #edebeb;
  border-bottom: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 6px 3px;

  div {
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: ${(props) => props.theme.textColor};
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    border-bottom: 1px solid #edebeb;
  }

  .me {
    flex-basis: 70px;
  }

  .name {
    color: rgb(69, 44, 221);
  }

  .profileText {
    flex-basis: 53px;
    &:hover {
      background-color: ${(props) => props.theme.hoverBackgroundColor};
    }
  }

  .profileIcon {
    font-size: 25px;
    margin-right: 20px;
  }

  .logout {
    border-radius: 0 0 10px 10px;
  }
`;

const ProfileDropDown = () => {
  const { profileDropDown } = useAppSelector((state) => state.toggle);
  const dispatch = useAppDispatch();

  return (
    <Wrapper
      onMouseLeave={() => dispatch(toggleProfileDropDownClose())}
      profileDropDown={profileDropDown}
    >
      <div className="me">
        <span className="name">모상빈</span>님, 안녕하세요!
      </div>
      <div className="profileText">
        <MdOutlineHeadset className="profileIcon" />{" "}
        <span>수강생 헬프센터</span>
      </div>
      <div className="profileText">
        <BsPerson className="profileIcon" />
        <span>마이페이지</span>
      </div>
      <div className="profileText logout">
        <MdLogout className="profileIcon" />
        <span>로그아웃</span>
      </div>
    </Wrapper>
  );
};

export default ProfileDropDown;
