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
  text-shadow: 0 0 8px #303030;

  &:hover {
    background-color: ${TERTIARY_COLOUR};
  }
`;
