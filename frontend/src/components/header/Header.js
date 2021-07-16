import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../assets/LOGOBUENO.png';
import routes from '../../routes/routes';
import Button from '../../components/button/Button';
import StyledHeader from './StyledHeader';

function Header() {
  const navRoutes = routes.map(({ path, label }) => (
    <li key={uuidv4()}>
      <Link to={path}>{label.toUpperCase()}</Link>
    </li>
  ));

  navRoutes.pop();

  return (
    < >
      <StyledHeader>
        <div className='headerBox'>
          <div className='logoHeader'>
            <a href="./">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className='buttonSession'>
            <Button blue barra>SING IN</Button>
            <Button>SING UP</Button>
          </div>
        </div>
        <nav>
          <ul className='mainMenu'>{navRoutes}</ul>
        </nav>
      </StyledHeader>
    </>
  );
}
export default Header;
