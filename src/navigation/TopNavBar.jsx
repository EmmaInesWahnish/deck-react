import Container from 'react-bootstrap/Container'
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom";
import logodarkicon from "../assets/logo-single.png";
import logodarktext from "../assets/logo-groovinads-33px.png";

const TopNavBar = () => {
  const muestro = false;

  return (
    <>
      <Container className="bg-light">
        <div className="flex-container-nav bg-light m-auto">
          <Navbar className="bg-light flex-container-nav px-5 m-0">
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
          </Navbar>
        </div>
      </Container>
    </>
  );
}

export default TopNavBar;