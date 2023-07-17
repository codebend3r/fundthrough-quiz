export enum CARD_STATUS {
  DEFAULT = "default",
  CORRECT = "correct",
  WRONG = "wrong",
}

export type CardStatus = (typeof CARD_STATUS)[keyof typeof CARD_STATUS];
