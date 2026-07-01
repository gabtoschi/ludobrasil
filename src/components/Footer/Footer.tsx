import { CURRENT_DATASET } from '../../dataset';
import ToschiLogo from '../../images/toschi-logo.svg';
import './Footer.css';

export default function Footer() {
  return <footer className="bg-warning-subtle container-fluid py-4">
    <div className="container d-flex flex-column justify-content-center align-items-center gap-3">
      <a href='https://gabtoschi.com/pt' target='_blank'><img className="footer-logo" src={ToschiLogo} alt='Gabriel Toschi' /></a>
      <span className='text-center'><b>Projeto LudoBrasil</b> • {CURRENT_DATASET.version} • última atualização em {CURRENT_DATASET.publishDate}</span>
    </div>
  </footer>
}