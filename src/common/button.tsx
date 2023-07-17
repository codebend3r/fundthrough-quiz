import styled from "@emotion/styled";
import { SECONDARY_COLOUR, TERTIARY_COLOUR } from "../constants/colours";

export const Button = styled.button`
  display: flex;
  padding: 1rem;
  font-size: 1rem;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${SECONDARY_COLOUR};
  background-color: ${SECONDARY_COLOUR};
  cursor: pointer;

  &:hover {
    background-color: ${TERTIARY_COLOUR};
  }
`;
