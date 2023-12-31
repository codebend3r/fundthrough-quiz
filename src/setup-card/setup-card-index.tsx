import { P } from '../typography/headers'
import { CARD_STATUS } from '../constants/card-status'
import { useGameScore } from '../store/store'
import { SelectedIcon } from '../common/selected-icon'
import { SetupCardContainer } from './setup-card-styles'
import { useMemo } from 'react'

export const SetupCard = ({ id, setup }: { id: number; setup: string }) => {
  const onSetupClick = useGameScore((state) => state.onSetupClick)
  const selectedJoke = useGameScore((state) => state.selectedJoke)
  const correctIDs = useGameScore((state) => state.correctIDs)
  const correctIndex: number = useMemo(
    () => correctIDs.findIndex((correctId) => correctId === id),
    [correctIDs]
  )
  const isCorrectAnswer: boolean = !!correctIDs[correctIndex]
  const isSelected: boolean = selectedJoke?.setup?.id === id
  const isSelectedOrIncorrect: string = isSelected ? '#ddf012' : '#FF0000'
  const iconColour = isCorrectAnswer ? '#00FF00' : isSelectedOrIncorrect
  const inDebugMode: boolean = import.meta.env.VITE_DEBUG_MODE === 'true'

  return (
    <SetupCardContainer
      status={CARD_STATUS.DEFAULT}
      onClick={onSetupClick.bind(null, { id, setup })}
      disabled={isCorrectAnswer}
    >
      <P>{inDebugMode ? `${id}-${setup}` : setup}</P>
      <SelectedIcon iconColour={iconColour} correctCount={correctIndex + 1} />
    </SetupCardContainer>
  )
}

export default SetupCard
