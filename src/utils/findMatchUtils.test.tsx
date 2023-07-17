// import { DataChunk } from "../types";
import { findMatchById } from "./findMatchUtils";

// export const mock: DataChunk[] = [
//   {
//     type: "general",
//     setup: "Why did the barber win the race?",
//     punchline: "He took a short cut.",
//     id: 320,
//   },
//   {
//     type: "general",
//     setup: "Why can't your nose be 12 inches long?",
//     punchline: "Because then it'd be a foot!",
//     id: 313,
//   },
//   {
//     type: "general",
//     setup: "I can't tell if i like this blender...",
//     punchline: "It keeps giving me mixed results.",
//     id: 70,
//   },
//   {
//     type: "general",
//     setup: "How are false teeth like stars?",
//     punchline: "They come out at night!",
//     id: 113,
//   },
//   {
//     type: "general",
//     setup: "Want to hear a joke about construction?",
//     punchline: "Nah, I'm still working on it.",
//     id: 153,
//   },
//   {
//     type: "general",
//     setup: "Can I watch the TV?",
//     punchline: "Yes, but don’t turn it on.",
//     id: 83,
//   },
//   {
//     type: "general",
//     setup: "Where did you learn to make ice cream?",
//     punchline: "Sunday school.",
//     id: 288,
//   },
//   {
//     type: "general",
//     setup: "Why are skeletons so calm?",
//     punchline: "Because nothing gets under their skin.",
//     id: 310,
//   },
//   {
//     type: "general",
//     setup: "What are the strongest days of the week?",
//     punchline: "Saturday and Sunday...the rest are weekdays.",
//     id: 156,
//   },
//   {
//     type: "general",
//     setup: "Why did the tree go to the dentist?",
//     punchline: "It needed a root canal.",
//     id: 341,
//   },
// ];

it("should return true if setup and punchline matches", () => {
  const setup = {
    id: 234,
    setup: "Why can't your nose be 12 inches long?",
  };

  const punchline = {
    id: 234,
    punchline: "Because then it'd be a foot!",
  };

  const result = findMatchById({
    setup,
    punchline,
  });

  expect(result).toBe(true);
});
