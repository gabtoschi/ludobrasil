import type { Jogo } from "../domains/jogo.domain";

export const getLudopediaJogoImage = (jogo: Jogo): string => {
  return `https://storage.googleapis.com/ludopedia-capas/${jogo.ludopediaID}_t.jpg`;
}