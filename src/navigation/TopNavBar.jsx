import Container from 'react-bootstrap/Container'
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom";
import logodarkicon from "../assets/logo-single.png";
import logodarktext from "../assets/logo-groovinads-33px.png";
import Widget from '../widget/Widget.jsx';

const TopNavBar = () => {
  const muestro = false;

  return (
    <>
      <Container className="bg-light">
        <div className="flex-container-nav bg-light m-auto">
          <Navbar className="bg-light flex-container-nav m-0">
            <NavLink to="/" id="logoSmall" className="nav-link pointer bg-light">
              <>
                {
                  muestro ?
                    <img src={logodarkicon} alt="logo" />
                    :
                    <img src={logodarktext} alt="logo" />
                }
              </>
            </NavLink>
            <NavLink to="/authentication"><button className="nav-link pointer btn btn-light btn-lg button"><i className="fas fa-user cart"></i></button></NavLink>
            <NavLink to="/who" className="nav-link pointer asBody bg-light" >
              <Widget />
            </NavLink>
            <NavLink to="/logout" ><button className="nav-link pointer btn btn-light btn-lg button"><i className="fas fa-sign-out-alt cart"></i></button></NavLink>
          </Navbar>
        </div>
      </Container>
    </>
  );
}

export default TopNavBar;