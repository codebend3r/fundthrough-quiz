import styled from "@emotion/styled";
import { Button } from "./common/button";
import { useGameScore } from "./store/store";
import Setups from "./setups";
import Punchlines from "./punchlines";
import { useEffect } from "react";

const QuizContainer = styled.div`
  border: 1px solid red;
  padding: 1rem;
`;

const QuestionOrganizer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Quiz = () => {
  const fetchQuizData = useGameScore((state) => state.getJokes);
  // const rawJokesData = useGameScore((state) => state.rawJokesData);

  useEffect(() => {
    fetchQuizData();
  }, []);

  return (
    <QuizContainer>
      <Button onClick={fetchQuizData}>New Game</Button>

      <QuestionOrganizer>
        <Setups />
        <Punchlines />
      </QuestionOrganizer>

      {/* <pre>{JSON.stringify(rawJokesData, null, 2)}</pre> */}
    </QuizContainer>
  );
};

export default Quiz;
