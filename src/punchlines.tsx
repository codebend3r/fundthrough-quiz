import styled from "@emotion/styled";
import { P } from "./typography/headers";
import { useGameScore } from "./store/store";
import { Punchline } from "./types";
import { shuffleArray } from "./utils/arrayUtils";

const PunchlinesContainer = styled.div`
  border: 1px solid orange;
  padding: 1rem;
`;

export const Setups = () => {
  const punchlinesList: Punchline[] = useGameScore(
    (state) => state.punchlinesList
  );
  const punchlinesListShuffled: Punchline[] =
    shuffleArray<Punchline>(punchlinesList);

  return (
    <PunchlinesContainer>
      {punchlinesListShuffled.map(({ id, punchline }) => {
        return (
          <P>
            {id}-{punchline}
          </P>
        );
      })}
    </PunchlinesContainer>
  );
};

export default Setups;
