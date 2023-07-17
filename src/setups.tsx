import styled from "@emotion/styled";
import { P } from "./typography/headers";
import { useGameScore } from "./store/store";
import { shuffleArray } from "./utils/arrayUtils";
import { Setup } from "./types";

const SetupsContainer = styled.div`
  border: 1px solid orange;
  padding: 1rem;
`;

export const Setups = () => {
  const setupsList: Setup[] = useGameScore((state) => state.setupsList);
  const setupsListShuffled: Setup[] = shuffleArray<Setup>(setupsList);

  return (
    <SetupsContainer>
      {setupsListShuffled.map(({ id, setup }: Setup) => {
        return (
          <P>
            {id}-{setup}
          </P>
        );
      })}
    </SetupsContainer>
  );
};

export default Setups;
