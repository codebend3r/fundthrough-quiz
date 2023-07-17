import styled from "@emotion/styled";
import { useGameScore } from "./store/store";
import { shuffleArray } from "./utils/arrayUtils";
import { Setup } from "./types";
import SetupCard from "./setup-card/setup-card-index";
import { useMemo } from "react";
import { H3 } from "./typography/headers";

const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  padding: 0;
`;

const SetupsContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  padding: 0;
`;

export const Setups = () => {
  const setupsList: Setup[] = useGameScore((state) => state.setupsList);
  const setupsListShuffled: Setup[] = useMemo(
    () => shuffleArray<Setup>(setupsList),
    [setupsList]
  );

  return (
    <GridContainer>
      <H3>Setups</H3>
      <SetupsContainer>
        {setupsListShuffled.map(({ id, setup }) => (
          <SetupCard key={`${id}-setup`} id={id} setup={setup} />
        ))}
      </SetupsContainer>
    </GridContainer>
  );
};

export default Setups;
