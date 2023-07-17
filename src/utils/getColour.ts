import { CARD_STATUS, CardStatus } from "../constants/card-status";
import { SECONDARY_COLOUR } from "../constants/colours";

export const getIconColourByStatus = (status: CardStatus): string => {
  const statusMap: Record<CardStatus, string> = {
    [CARD_STATUS.DEFAULT]: SECONDARY_COLOUR,
    [CARD_STATUS.CORRECT]: "green",
    [CARD_STATUS.WRONG]: "red",
  };

  return statusMap[status];
};

export const getOutlineColourByStatus = (status: CardStatus): string => {
  const statusMap: Record<CardStatus, string> = {
    [CARD_STATUS.DEFAULT]: SECONDARY_COLOUR,
    [CARD_STATUS.CORRECT]: "green",
    [CARD_STATUS.WRONG]: "red",
  };

  return statusMap[status];
};
