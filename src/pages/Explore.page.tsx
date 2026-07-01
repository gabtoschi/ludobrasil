import JogoItem from "../components/JogoItem/JogoItem";
import { LUDOBRASIL_DATASET } from "../dataset";

export default function ExplorePage() {
  return (
    <section className="mt-5">
      <JogoItem className="mb-3" jogo={LUDOBRASIL_DATASET[0]} />
      <JogoItem className="mb-3" jogo={LUDOBRASIL_DATASET[1]} />
      <JogoItem className="mb-3" jogo={LUDOBRASIL_DATASET[2]} />
      <JogoItem className="mb-3" jogo={LUDOBRASIL_DATASET[3]} />
      <JogoItem className="mb-3" jogo={LUDOBRASIL_DATASET[4]} />
      <JogoItem className="mb-3" jogo={LUDOBRASIL_DATASET[5]} />
    </section>
  );
}