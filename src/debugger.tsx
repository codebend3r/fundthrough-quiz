import styled from '@emotion/styled'
import { useGameScore } from './store/store'

const DebuggerContainer = styled.div`
  display: grid;
  padding: 1rem;
  gap: 1rem;
  font-size: 0.75rem;
`

export const Quiz = () => {
  const selectedJoke = useGameScore((state) => state.selectedJoke)
  const correctIDs = useGameScore((state) => state.correctIDs)
  const correctCount = useGameScore((state) => state.correctCount)

  return (
    <DebuggerContainer>
      {JSON.stringify(
        {
          selectedJoke,
          correctIDs,
          correctCount,
        },
        null,
        2
      )}
    </DebuggerContainer>
  )
}

export default Quiz
