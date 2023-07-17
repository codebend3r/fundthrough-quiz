import { Punchline, Setup } from "../types";

export const findMatchById = ({
  setup,
  punchline,
}: {
  setup: Setup;
  punchline: Punchline;
}): boolean => !!setup?.id && !!punchline?.id && setup?.id === punchline?.id;
