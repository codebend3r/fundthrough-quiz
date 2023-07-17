import axios from "axios";
import { create } from "zustand";
import { Setup, Punchline, DataChunk, JokeHash } from "../types";
import { findMatchById } from "../utils/findMatchUtils";

const JOKES_URL = "https://official-joke-api.appspot.com/jokes/ten";

type GameScore = {
  isLoading: boolean;
  correctIDs: number[];
  selectedJoke: JokeHash;
  correctCount: number;
  setupsList: Setup[];
  punchlinesList: Punchline[];
  getJokes: () => void;
  reset: () => void;
  onSetupClick: (setup: Setup) => any;
  onPunchlineClick: (punchline: Punchline) => any;
  registerCorrectAnswer: (id: number) => any;
  rawJokesData: unknown;
};

export const useGameScore = create<GameScore>((set) => ({
  isLoading: false,
  correctIDs: [],
  selectedJoke: {
    setup: null,
    punchline: null,
  },
  correctCount: 0,
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
  reset: () =>
    set({
      selectedJoke: {
        setup: null,
        punchline: null,
      },
    }),
  onSetupClick: (setup: Setup) =>
    set((state) => {
      const { punchline } = state.selectedJoke;

      const selectedJoke = { setup, punchline };

      const isCorrectAnswer: boolean = findMatchById({
        setup,
        punchline,
      });

      isCorrectAnswer && state.registerCorrectAnswer(setup.id);

      return { selectedJoke };
    }),
  onPunchlineClick: (punchline: Punchline) =>
    set((state) => {
      const { setup } = state.selectedJoke;

      const selectedJoke = { setup, punchline };

      const isCorrectAnswer: boolean = findMatchById({
        setup,
        punchline,
      });

      isCorrectAnswer && state.registerCorrectAnswer(punchline.id);

      return { selectedJoke };
    }),
  registerCorrectAnswer: (id: number) =>
    set((state) => ({
      correctCount: state.correctCount + 1,
      correctIDs: [...state.correctIDs, id],
    })),
  rawJokesData: {},
  setupsList: [],
  punchlinesList: [],
}));
