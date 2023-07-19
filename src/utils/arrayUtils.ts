/**
 * @method shuffleArray
 * @description a basic array shuffle method, will return a copy of the array in a random order
 * @param array
 * @returns array
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  // always return a copy of the array
  // don't mute the original array
  const arrayCopied = [...array];

  return arrayCopied.sort(() => 0.5 - Math.random());
};

/**
 * @method shuffleArrayFY
 * @description a true shuffle method known as the Fisher-Yates shuffle method
 * @info https://bost.ocks.org/mike/shuffle/
 * @info https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * @param array
 * @returns array
 */
export const shuffleArrayFY = <T>(array: T[]): T[] => {
  // always return a copy of the array
  // don't mute the original array
  const arrayCopied = [...array];

  for (let i = arrayCopied.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arrayCopied[i];
    arrayCopied[i] = arrayCopied[j];
    arrayCopied[j] = temp;
  }

  return arrayCopied;
};
