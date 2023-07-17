import styled from "@emotion/styled";
import QuizContainer from "./quiz-container";
import { H1 } from "./typography/headers";

const OuterContainer = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
`;

const InnerContainer = styled.div`
  display: grid;
  padding: 1rem;
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
