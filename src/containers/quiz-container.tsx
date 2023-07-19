import styled from '@emotion/styled'
import { Button } from '../common/button'
import { useGameScore } from '../store/store'
import Setups from './setups-containers'
import Punchlines from './punchlines-containers'
import Debugger from '../debugger'
import { P } from '../typography/headers'
import { Preloader } from '../common/preloader'

const QuizContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-rows: auto 60px 1fr;
`

const Controls = styled.div`
  display: flex;
  gap: 1rem;
`

const QuestionOrganizer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
`

const instructions: string =
  'Match the setup to the corresponding punchline by clicking on each card in each column'

const winningText: string = 'Congratulations! You have matched all 10 jokes.'

export const Quiz = () => {
  const fetchQuizData = useGameScore((state) => state.getJokes)
  const reset = useGameScore((state) => state.reset)
  const isLoading = useGameScore((state) => state.isLoading)
  const correctCount = useGameScore((state) => state.correctCount)
  const inDebugMode: boolean = import.meta.env.VITE_DEBUG_MODE === 'true'

  return isLoading ? (
    <Preloader />
  ) : (
    <QuizContainer>
      <P>{instructions}</P>
      {correctCount === 10 && <P textColour="#00FF00">{winningText}</P>}
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
  )
}

export default Quiz
