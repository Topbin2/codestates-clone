import styled from "styled-components";
import LoadingSpinner from "../components/LoadingSpinner";

const Wrapper = styled.div`
  height: 100vh;
`;

const Job = () => {
  return (
    <Wrapper>
      <LoadingSpinner />
    </Wrapper>
  );
};

export default Job;
