import styled from "@emotion/styled";
import { P } from "../typography/headers";

const SetupCardContainer = styled.div`
  border: 1px solid green;
  padding: 1rem;
`;

export const SetupCard = ({ setupText }: { setupText: string }) => {
  console.log({
    setupText,
  });

  return (
    <SetupCardContainer>
      <P>{setupText}</P>
    </SetupCardContainer>
  );
};

export default SetupCard;
