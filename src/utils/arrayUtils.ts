/**
 * @method shuffleArray
 * @description a basic array shuffle method, will return a copy of the array in a random order
 * @param array
 * @returns array
 */
export const shuffleArray = <T>(array: T[]): T[] => [
  ...array.sort(() => 0.5 - Math.random()),
];

/**
 * @method shuffleArrayFY
 * @description a true shuffle method known as the Fisher-Yates shuffle method
 * @info https://bost.ocks.org/mike/shuffle/
 * @info https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * @param array
 * @returns array
 */
export const shuffleArrayFY = <T>(array: T[]): T[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }

  return shuffledArray;
};
