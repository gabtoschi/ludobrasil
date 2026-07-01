import JogoItem from "../components/JogoItem/JogoItem";
import Pagination from "../components/Pagination/Pagination";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import { CURRENT_DATASET } from "../dataset";
import usePagination from "../hooks/usePagination.hook";

export default function ExplorePage() {
  const {
    currentPage,
    currentItems,
    ...paginationProps
  } = usePagination(CURRENT_DATASET.data, 20);

  return (
    <>
    <SectionHeader
      size='large'
      before=''
      focus='Explore'
      after=' jogos brasileiros autorais'
      subtitle='Ao escolher um jogo, você será redirecionado para a sua página na Ludopedia.'
    />

    <section>
      {currentItems.map((jogo) => <JogoItem key={jogo.titulo} className="mb-3" jogo={jogo} />)}

      <Pagination currentPage={currentPage} {...paginationProps} />
    </section>
    </>
  );
}