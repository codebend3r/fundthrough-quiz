import styled from '@emotion/styled'
import { CardStatus } from '../constants/card-status'
import {
  QUINTARY_COLOUR,
  SECONDARY_COLOUR,
  TERTIARY_COLOUR,
} from '../constants/colours'

export const PunchlineContainer = styled.button<{
  status: CardStatus
  disabled?: boolean
}>`
  display: grid;
  gap: 1rem;
  align-items: center;
  grid-template-columns: 1fr auto;
  width: 100%;
  border: 2px solid ${TERTIARY_COLOUR};
  background-color: ${({ disabled }) =>
    disabled ? QUINTARY_COLOUR : 'transparent'};
  padding: 1.5rem 1rem;
  text-align: left;
  border-radius: 0.5rem;
  font-size: 1rem;
  text-transform: lowercase;
  cursor: pointer;

  &:hover {
    background-color: ${SECONDARY_COLOUR};
  }

  &:disabled {
    background-color: ${QUINTARY_COLOUR};
  }
`
