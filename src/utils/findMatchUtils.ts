import { CARD_STATUS, CardStatus } from '../constants/card-status'
import { JokeHash, Punchline, Setup } from '../types'

export const findMatchById = ({
  setup,
  punchline,
}: {
  setup: Setup | null
  punchline: Punchline | null
}): boolean => !!setup?.id && !!punchline?.id && setup?.id === punchline?.id

export const computeStatus = ({
  id,
  correctIDs,
  selectedJoke,
}: {
  id: number
  correctIDs: number[]
  selectedJoke: JokeHash
}): CardStatus => {
  const isCorrectAnswer: boolean = correctIDs.some(
    (correctId) => correctId === id
  )
  const isSelected: boolean = selectedJoke?.setup?.id === id

  if (isCorrectAnswer) {
    return CARD_STATUS.CORRECT
  } else if (!isCorrectAnswer && !isSelected) {
    return CARD_STATUS.WRONG
  } else {
    return CARD_STATUS.DEFAULT
  }
}
