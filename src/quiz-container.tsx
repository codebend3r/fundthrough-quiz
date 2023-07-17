import styled from "@emotion/styled";
import { Button } from "./common/button";
import { useGameScore } from "./store/store";
import Setups from "./setups";
import Punchlines from "./punchlines";
import Debugger from "./debugger";
import { P } from "./typography/headers";

const QuizContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
`;

const QuestionOrganizer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
`;

export const Quiz = () => {
  const fetchQuizData = useGameScore((state) => state.getJokes);
  const reset = useGameScore((state) => state.reset);
  const inDebugMode: boolean = import.meta.env.VITE_DEBUG_MODE === "true";

  return (
    <QuizContainer>
      <P>
        Match the setup to the corresponding punchline by clicking on a cards in
        each column
      </P>
      <Controls>
        <Button onClick={fetchQuizData}>New Game</Button>
        <Button onClick={reset}>Reset</Button>
      </Controls>
      {inDebugMode && <Debugger />}
      <QuestionOrganizer>
        <Setups />
        <Punchlines />
      </QuestionOrganizer>
    </QuizContainer>
  );
};

export default Quiz;
