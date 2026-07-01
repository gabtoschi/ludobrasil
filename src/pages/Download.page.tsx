import SectionHeader from "../components/SectionHeader/SectionHeader";
import { CURRENT_DATASET, DATASET_HISTORY } from "../dataset";

export default function DownloadPage() {
  const datasetFields = [
    {field: 'titulo', desc: 'nome do jogo, como cadastrado na Ludopedia'},
    {field: 'ano', desc: 'ano do primeiro lançamento no Brasil'},
    {field: 'autores', desc: 'lista de pessoas autoras em ordem alfabética (apenas JSON)'},
    {field: 'autor1 - autor7', desc: 'pessoas autoras em ordem alfabética (apenas CSV)'},
    {field: 'ludopediaID', desc: 'número identificador do jogo na Ludopedia'},
    {field: 'ludopediaURL', desc: 'link para a página do jogo na Ludopedia'},
  ];

  const links = [
   {href: CURRENT_DATASET.csvFile, label: 'Dataset em CSV'},
   {href: CURRENT_DATASET.jsonFile, label: 'Dataset em JSON'},
  ];

  return <>
    <SectionHeader
      size='large'
      before=''
      focus='Baixe'
      after=' o dataset do LudoBrasil'
      subtitle='Dados prontos para serem usados em pesquisas e outros projetos'
    />

    <article className="fs-5 mb-5">
      <p>O levantamento feito pelo projeto LudoBrasil também pode ser <b>baixado como um dataset organizado em CSV ou JSON</b> para uso em outros projetos. Os arquivos aqui refletem a mesma lista presente no site e sempre serão atualizados conforme a lista também for atualizada.</p>

      <p>É permitido o uso deste dataset em qualquer contexto, comercial ou não, desde que sejam dados os devidos créditos para o projeto LudoBrasil, incluindo um link para esta página. Entretanto, é expressamente proibida a distribuição deste dataset com pouca ou nenhuma modificação, gratuita ou paga.</p>
    </article>

    <h4 className="text-center mb-3"><b>Versão atual</b>: v1, atualizada em 01/07/2026</h4>

    <nav className="d-flex justify-content-center gap-3">
      {links.map((link) =>
        <a
          className='fs-4 fw-bold text-body text-decoration-none px-3 py-2 border border-success border-opacity-50 border-2 rounded-2 user-select-none home-link'
          key={link.label}
          href={link.href}
          target='_blank'
        >
          {link.label}
        </a>
      )}
    </nav>

    <hr className="m-5"/>

    <SectionHeader
      size='small'
      before=''
      focus='Campos'
      after=' do dataset'
      subtitle='Informações disponíveis nos arquivos'
    />

    <ul className="fs-5">
      {datasetFields.map(({field, desc}) => <li key={field}><b className="font-monospace text-success">{field}</b>: {desc}</li>)}
    </ul>

    <hr className="m-5"/>

    <SectionHeader
      size='small'
      before=''
      focus='Histórico'
      after=' de versões'
      subtitle='Obtenha versões antigas do dataset LudoBrasil'
    />

    <table className="fs-4">
      <thead className="text-success border-bottom border-success">
        <tr>
          <th className="p-2">Versão</th>
          <th className="p-2">Data</th>
          <th className="p-2">Download</th>
        </tr>
      </thead>
      <tbody>
        {DATASET_HISTORY.map((dataset) => (
          <tr key={dataset.version} className="border-bottom border-success">
            <td className="p-2">{dataset.version}</td>
            <td className="p-2">{dataset.publishDate}</td>
            <td className="p-2"><a href={dataset.csvFile} target='_blank'>CSV</a> • <a href={dataset.jsonFile} target='_blank'>JSON</a></td>
          </tr>
      ))}
      </tbody>
    </table>
  </>;
}