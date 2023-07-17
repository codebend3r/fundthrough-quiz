import styled from "@emotion/styled";
import { P } from "../typography/headers";

const PunchlineContainer = styled.div`
  border: 1px solid green;
  padding: 1rem;
`;

export const PunchlineCard = ({ setupText }: { setupText: string }) => {
  console.log({
    setupText,
  });

  return (
    <PunchlineContainer>
      <P>{setupText}</P>
    </PunchlineContainer>
  );
};

export default PunchlineCard;
