import { NavLink } from "react-router";
import useRandomSublist from "../hooks/useRandomSublist.hook";
import JogoItem from "../components/JogoItem/JogoItem";
import { CURRENT_DATASET } from "../dataset";

export default function HomePage() {
  const links = [
   {to: '/sobre', label: 'Conheça o projeto'},
   {to: '/explorar', label: 'Explore os jogos'},
   {to: '/baixar', label: 'Baixe a lista'},
  ];

  const {sublist: randomJogos, reroll} = useRandomSublist(CURRENT_DATASET.data, 5);

  return <>
    <header className="mb-5">
        <h1 className="mb-4 text-center">Jogos de tabuleiro e cartas <b className="text-success">feitos por brasileiros</b></h1>

        <h5 className="text-center lh-base mb-5">O projeto <b>LudoBrasil</b> tem o objetivo de fazer um levantamento extenso dos jogos de mesa criados no território nacional, com foco na preservação da história do game design brasileiro e o reconhecimento das pessoas autoras.</h5>
    </header>

    <nav className="d-flex justify-content-around flex-column flex-md-row gap-3">
      {links.map((link) =>
        <NavLink
          className='fs-4 fw-bold text-body text-decoration-none px-3 py-2 border border-success border-opacity-50 border-2 rounded-2 user-select-none home-link'
          key={link.label}
          to={link.to}
        >
          {link.label}
        </NavLink>
      )}
    </nav>

    <hr className="m-5"/>

    <header className="mb-5">
      <h3 className="d-flex gap-3">
        <span>Alguns jogos <b className="text-success">aleatórios</b> para você conhecer</span>
        <i onClick={reroll} className="bi bi-arrow-clockwise cur-pointer user-select-none fs-3" />
      </h3>
      <h5 className="fst-italic">Ao escolher um jogo, você será redirecionado para a sua página na Ludopedia.</h5>
    </header>

    {randomJogos.map((jogo) => <JogoItem key={jogo.titulo} className="mb-3" jogo={jogo} />)}
  </>;
}