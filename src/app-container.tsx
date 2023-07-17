import styled from "@emotion/styled";
import QuizContainer from "./quiz-container";
import { H1 } from "./typography/headers";

const OuterContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const InnerContainer = styled.div`
  display: grid;
  padding: 1rem 2rem;
  max-width: 1600px;
  margin: 0 auto;
`;

export const App = () => (
  <OuterContainer>
    <InnerContainer>
      <H1>Quiz Game</H1>
      <QuizContainer />
    </InnerContainer>
  </OuterContainer>
);

export default App;
