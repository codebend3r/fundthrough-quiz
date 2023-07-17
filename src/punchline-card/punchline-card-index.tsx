import { P } from "../typography/headers";
import { CARD_STATUS } from "../constants/card-status";
import { useGameScore } from "../store/store";
import { SelectedIcon } from "../common/selected-icon";
import { PunchlineContainer } from "./punchline-card-styles";
import { useMemo } from "react";

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
  const correctIndex: number = useMemo(
    () => correctIDs.findIndex((correctId) => correctId === id),
    [correctIDs]
  );
  const isCorrectAnswer: boolean = !!correctIDs[correctIndex];
  const isSelected: boolean = selectedJoke?.punchline?.id === id;
  const isSelectedOrIncorrect: string = isSelected ? "#ddf012" : "#FF0000";
  const iconColour = isCorrectAnswer ? "#00FF00" : isSelectedOrIncorrect;
  const inDebugMode: boolean = import.meta.env.VITE_DEBUG_MODE === "true";

  return (
    <PunchlineContainer
      status={CARD_STATUS.DEFAULT}
      onClick={onPunchlineClick.bind(null, { id, punchline })}
      disabled={isCorrectAnswer}
    >
      <P>{inDebugMode ? `${id}-${punchline}` : punchline}</P>
      <SelectedIcon iconColour={iconColour} correctCount={correctIndex + 1} />
    </PunchlineContainer>
  );
};

export default PunchlineCard;
