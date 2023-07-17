import { P } from "../typography/headers";
import { CARD_STATUS } from "../constants/card-status";
import { useGameScore } from "../store/store";
import { SelectedIcon } from "../common/selected-icon";
import { PunchlineContainer } from "./punchline-card-styles";
import { computeStatus } from "../utils/findMatchUtils";
import { getIconColourByStatus } from "../utils/getColour";

export const PunchlineCard = ({
  id,
  punchline,
}: {
  id: number;
  punchline: string;
}) => {
  const onPunchlineClick = useGameScore((state) => state.onPunchlineClick);
  const selectedJoke = useGameScore((state) => state.selectedJoke);
  const correctIDs = useGameScore((state) => state.correctIDs);
  const status = computeStatus({
    id,
    correctIDs,
    selectedJoke,
  });
  const iconColour = getIconColourByStatus(status);

  // const isCorrectAnswer: boolean = correctIDs.some(
  //   (correctId) => correctId === id
  // );
  // const isSelected: boolean = selectedJoke?.punchline?.id === id;
  // const isSelectedOrIncorrect: string = isSelected ? "#ddf012" : "#FF0000";
  // const iconColour = isCorrectAnswer ? "#00FF00" : isSelectedOrIncorrect;
  const inDebugMode: boolean = import.meta.env.VITE_DEBUG_MODE === "true";

  return (
    <PunchlineContainer
      status={status}
      onClick={onPunchlineClick.bind(null, { id, punchline })}
      disabled={status === CARD_STATUS.CORRECT}
    >
      <P>{inDebugMode ? `${id}-${punchline}` : punchline}</P>
      <SelectedIcon iconColour={iconColour} />
    </PunchlineContainer>
  );
};

export default PunchlineCard;
