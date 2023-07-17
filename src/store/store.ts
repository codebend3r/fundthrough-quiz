import axios from "axios";
import { create } from "zustand";
import { Setup, Punchline, DataChunk } from "../types";

const JOKES_URL = "https://official-joke-api.appspot.com/jokes/ten";

type GameScore = {
  isLoading: boolean;
  selectedJoke: DataChunk[];
  setupsList: Setup[];
  punchlinesList: Punchline[];
  getJokes: () => void;
  rawJokesData: unknown;
};

export const useGameScore = create<GameScore>((set) => ({
  isLoading: false,
  selectedJoke: [],
  getJokes: async () => {
    try {
      const fetchedData = await axios.get(JOKES_URL);

      set({
        isLoading: false,
        rawJokesData: fetchedData.data,
        setupsList: fetchedData.data.map(({ id, setup }: DataChunk) => ({
          id,
          setup,
        })),
        punchlinesList: fetchedData.data.map(
          ({ id, punchline }: DataChunk) => ({
            id,
            punchline,
          })
        ),
      });
    } catch (error) {
      set({
        isLoading: false,
        rawJokesData: {},
      });
    }
  },
  rawJokesData: {},
  setupsList: [],
  punchlinesList: [],
}));
