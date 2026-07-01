import SectionHeader from "../components/SectionHeader/SectionHeader";

export default function AboutPage() {
  return <>
    <SectionHeader
      size='large'
      before=''
      focus='Sobre'
      after=' o projeto LudoBrasil'
      subtitle='Por que estamos aqui e como você pode ajudar!'
    />

    <article className="fs-5">
      <p>O projeto <b>LudoBrasil</b> tem o objetivo de fazer um <b>levantamento extenso dos jogos de mesa criados no território nacional</b>, com foco na preservação da história do game design brasileiro e o reconhecimento das pessoas autoras. Nos últimos anos, mesmo com a expansão do mercado de jogos de mesa no Brasil, visualizar o tamanho e a história do nosso poder criativo ainda era muito difícil.</p>

      <p>Iniciado como uma discussão no grupo do antigo ProtoBR, o projeto <b>já mapeou mais de 900 jogos de mesa</b> feitos por brasileiros e que foram lançados, comercialmente ou de forma gratuita, para o público. Além do título e do ano, a informação mais importante neste levantamento são os nomes das pessoas autoras de cada jogo, mostrando a pluralidade de vozes (ou a falta dela) no cenário do game design nacional, assim como reconhecer as pessoas que mais trabalharam para levar a nossa escola de design mundo afora.</p>

      <p>Ao invés de criar um banco de dados do zero, o projeto LudoBrasil <b>se apoia nos dados presentes na Ludopedia</b>, o maior portal sobre jogos analógicos do país. Desta forma, mesmo sem uma parceria formal, conseguimos incentivar a melhoria das informações que fazem parte do site e caminhamos para uma fonte de dados mais robusta e completa.</p>

      <p>Além deste site, todos os dados catalogados pelo projeto também estão <b>disponíveis como um dataset para download gratuito</b>. Desta forma, pesquisadores e intusiastas podem usar esta lista como base para futuras pesquisas e projetos sobre o cenário dos jogos de mesa do Brasil.</p>

      <p>O projeto LudoBrasil é uma iniciativa do designer de jogos <a href="https://gabtoschi.com/pt" target="_blank" className="font-toschi"><b>Gabriel Toschi</b></a>, com a ajuda de várias outras pessoas e todos que atualizaram a Ludopedia nas últimas décadas. Gostariamos de agradecer Yuri Morroni, Igor Knop, Diego de Moraes e Sérgio Halaban pelo apoio.</p>

      <br />

      <span className="d-flex justify-content-center align-items-center flex-column gap-2">
        <p className="m-0 fw-bold">Se você tiver informações sobre jogos brasileiros que não estejam presentes na lista, entre em contato pelo e-mail:</p>
        <span className="font-monospace text-success">eu (arroba) gabtoschi (ponto) com</span>
      </span>
    </article>

    <hr className="m-5"/>

    <SectionHeader
      size='small'
      before=''
      focus='Perguntas frequentes'
      after=' sobre o projeto'
      subtitle='Talvez sua dúvida já tenha sido respondida aqui.'
    />

    <section className="mb-4">
      <h4 className="fw-bold">Quais critérios vocês usam para incluir jogos na lista?</h4>
      <article className="fs-5">
      Para que um jogo seja considerado para o projeto LudoBrasil, ele deve <b>cumprir todas estas condições</b>:
      <ul>
        <li>Estar catalogado como um jogo base na Ludopedia;</li>
        <li>Ser considerado um jogo de mesa (tabuleiro, cartas, etc.) - RPGs não são o foco do projeto;</li>
        <li>Ter crédito de autoria de pelo menos uma pessoa brasileira;</li>
        <li>Em caso de jogos lançados fisicamente, deve ter sido lançado em território nacional;</li>
        <li>Em caso de jogos lançados digitalmente, os arquivos e regras devem ter sido disponibilizados publicamente;</li>
        <li>Em caso de jogos que usam propriedades intelectuais (IPs) de outros, devem ser produtos oficiais e licenciados.</li>
      </ul>
    </article>    </section>

    <section className="mb-4">
      <h4 className="fw-bold">Vocês fazem parte do time da Ludopedia?</h4>
      <p className="fs-5">Não, o projeto LudoBrasil é totalmente independente do site Ludopedia, por mais que usemos o banco de dados dele como base de pesquisa.</p>
    </section>

    <section>
      <h4 className="fw-bold">Por que o jogo brasileiro X não está na lista?</h4>
      <p className="fs-5">O foco do projeto são jogos brasileiros <b>autorais</b>, ou seja, se um jogo, mesmo que brasileiro, esteja sem créditos de autoria (seja na Ludopedia, seja no próprio produto), ele não é considerado para o projeto. Caso você conheça quem são as pessoas autoras de um jogo ainda sem registro, por favor, entre em contato.</p>
    </section>
  </>;
}