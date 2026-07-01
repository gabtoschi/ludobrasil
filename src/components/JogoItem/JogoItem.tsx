import type { JogoItemProps } from "./JogoItem.types";
import './JogoItem.css';
import { getLudopediaJogoImage } from "../../utils/ludopedia.utils";
import { useRef } from "react";

export default function JogoItem({ jogo, className = '' }: JogoItemProps) {
  const autoresStr = jogo.autores.sort((a, b) => a.localeCompare(b)).join(', ');

  const hiddenLinkRef = useRef<HTMLAnchorElement>(null);
  const onClick = () => {
    if (hiddenLinkRef?.current) {
      hiddenLinkRef.current.click();
    }
  }

  return <div onClick={onClick} className={`item border border-success border-opacity-25 border-2 rounded-2 p-2 cur-pointer ${className}`}>
    <div className="d-flex align-items-center">
      <a ref={hiddenLinkRef} className="d-none" href={jogo.ludopediaURL} target="_blank">Ludopedia</a>

      <div className="capa-wrapper me-3 d-flex align-items-center justify-content-center">
        <img className="capa" alt={jogo.titulo} src={getLudopediaJogoImage(jogo)} />
      </div>

      <div className="d-flex flex-column">
        <span className="titulo">
          <b>{jogo.titulo}</b> <span className="ano">({jogo.ano})</span>
        </span>
        <span className="autores fw-medium fst-italic">{autoresStr}</span>
      </div>
    </div>
  </div>;
}