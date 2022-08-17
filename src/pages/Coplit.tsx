import styled from "styled-components";
import LoadingSpinner from "../components/LoadingSpinner";

const Wrapper = styled.div`
  height: 100vh;
`;

const Coplit = () => {
  return (
    <Wrapper>
      <LoadingSpinner />
    </Wrapper>
  );
};

export default Coplit;
