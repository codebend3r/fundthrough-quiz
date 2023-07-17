import styled from "@emotion/styled";
import { getOutlineColourByStatus } from "../utils/getColour";
import { CardStatus } from "../constants/card-status";
import { QUINTARY_COLOUR, SECONDARY_COLOUR } from "../constants/colours";

export const PunchlineContainer = styled.button<{
  status: CardStatus;
  disabled: boolean;
}>`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  width: 100%;
  border: ${({ status }) => `2px solid ${getOutlineColourByStatus(status)}`};
  background-color: ${({ disabled }) => (disabled ? QUINTARY_COLOUR : "none")};
  padding: 2rem 1rem;
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
`;
