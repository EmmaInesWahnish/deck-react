import Container from 'react-bootstrap/Container'
import {useState, useEffect} from 'react';
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom";
import logodarkicon from "../assets/logo-single.png";
import logodarktext from "../assets/logo-groovinads-33px.png";
import Widget from '../widget/Widget.jsx';
import styled from 'styled-components';
import useMediaQuery from '../helpers/isWide.js';

const HeaderBar = styled.header`
    width: 100%;
    padding: 0.5em 1em;
    display: flex;
    height: 64px;
    position: fixed;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;
`;

const TopNavBar = () => {
  const [muestro, setMuestro] = useState(false);
  let isMediaWide = useMediaQuery('max-width: 320px');

  useEffect(() => {
    if (isMediaWide){
      setMuestro(true);
    }
    else{
      setMuestro(false);
    }
    console.log(muestro)
  }, [isMediaWide]);

  return (
    <HeaderBar>
      <Container>
        <Navbar className="flex-container-nav m-0">
          <NavLink to="/" id="logoSmall" className="nav-link pointer">
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
          <NavLink to="/who" className="nav-link pointer asBody" >
            <Widget />
          </NavLink>
          <NavLink to="/logout" ><button className="nav-link pointer btn btn-light btn-lg button"><i className="fas fa-sign-out-alt cart"></i></button></NavLink>
        </Navbar>
      </Container>
    </HeaderBar>
  );
}

export default TopNavBar;