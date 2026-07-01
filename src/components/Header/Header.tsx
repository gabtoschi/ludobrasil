import { NavLink } from 'react-router';
import FullLogo from '../../images/ludobrasil-full.svg';
import './Header.css';

export default function Header() {
  const links = [
   {to: '/sobre', label: 'SOBRE'},
   {to: '/explorar', label: 'EXPLORAR'},
   {to: '/baixar', label: 'BAIXAR'},
  ];

  return <nav className="bg-warning-subtle container-fluid py-3">
    <div className="container">
      <div className="row">
        <div className="col-sm d-flex justify-content-center justify-content-md-start mb-4 mb-md-0">
          <NavLink to="/"><img className='header-logo' src={FullLogo} alt='LudoBrasil' /></NavLink>
        </div>
        <div className='col-sm d-flex align-items-center justify-content-around'>
          {links.map((link) => (
            <NavLink className='fs-4 fw-bold text-body text-decoration-none header-link' key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  </nav>
}