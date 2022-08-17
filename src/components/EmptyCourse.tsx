import styled from "styled-components";

const Wrapper = styled.section`
  border: 1px solid ${(props) => props.theme.lightGrayTextColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 130px;

  img {
    width: 50%;
  }

  h1 {
    color: ${(props) => props.theme.textColor};
    font-size: 36px;
    font-weight: 900;
  }

  p {
    color: #667ba3;
    font-size: 17px;
  }
`;

const EmptyCourse = () => {
  return (
    <Wrapper>
      <img
        src="	https://urclass.codestates.com/static/media/emptyContentCover.55f563d7.png"
        alt=""
      />
      <h1>코스가 비어있습니다.</h1>
      <p>자세한 코스 정보는 마이페이지를 확인해주세요.</p>
    </Wrapper>
  );
};

export default EmptyCourse;
