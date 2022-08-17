import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 54px;
    height: 54px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 65px;
    height: 65px;
    margin: 6px;
    border: 6px solid #ff2058;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #b2a4ff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = () => (
  <Wrapper>
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  </Wrapper>
);

export default LoadingSpinner;
