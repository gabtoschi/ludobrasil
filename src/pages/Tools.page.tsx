import FileSaver from "file-saver";
import { CURRENT_DATASET } from "../dataset";

export default function ToolsPage() {
  const getCurrentDatasetJson = () => {
    const sortedJogos = CURRENT_DATASET.data.map((jogo) => ({...jogo, autores: jogo.autores.sort((a, b) => a.localeCompare(b))}));
    const json = JSON.stringify(sortedJogos);

    FileSaver.saveAs(new Blob([json]), 'dataset.json');
  }

  const getCurrentDatasetCsv = () => {
    const autorAmount = 7;
    const csvArray = [`ano;titulo;autor1;autor2;autor3;autor4;autor5;autor6;autor7;ludopediaID;ludopediaURL`];

    CURRENT_DATASET.data.forEach((jogo) => {
      const jogoLine = [jogo.ano.toString(), jogo.titulo];

      const sortedAutores = jogo.autores.sort((a, b) => a.localeCompare(b));
      for (let i = 0; i < autorAmount; i++) {
        jogoLine.push(sortedAutores[i] || '');
      }

      jogoLine.push(jogo.ludopediaID.toString(), jogo.ludopediaURL);
      csvArray.push(jogoLine.join(';'));
    })

    FileSaver.saveAs(new Blob([csvArray.join('\n')]), 'dataset.csv');
  }

  return <>
  <header className="mb-5">
    <h1><b className="text-success">Ferramentas</b> de manutenção</h1>
    <h5>Você não deveria estar vendo isso aqui, sai!</h5>
  </header>

  <div className="d-flex flex-column gap-4">
    <button onClick={getCurrentDatasetJson}>Baixar JSON do dataset atual</button>
    <button onClick={getCurrentDatasetCsv}>Baixar CSV do dataset atual</button>
  </div>

  </>;
}