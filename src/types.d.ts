export type Setup = {
  id: number;
  setup: string;
};

export type Punchline = {
  id: number;
  punchline: string;
};

export type DataChunk = {
  type: string;
  id: number;
  punchline: string;
  setup: string;
};
