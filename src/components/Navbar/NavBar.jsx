import React, { useEffect } from 'react'
import { logout, auth } from "../../fire"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import "./Navbar.scss";
import { SearchIcon } from '../SVGs/SearchIcon';
import EmailSVG from '../SVGs/EmailSVG';
import { useSelector, useDispatch } from "react-redux";
import { fetchDataCreater } from '../../Redux/Acrtions/WeatherAction';
// import SimpleLoader from '../Loader/simpleLoader';

export const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const WDATA = useSelector(state => state.weatherReducer.weatherdata);
  const dispatch=useDispatch();
  console.log("Navbar",WDATA);
  useEffect(() => {
    dispatch(fetchDataCreater());
    }, [dispatch])
  const history = useNavigate();

  useEffect(() => {
    if (!user) history("/")
  }, [user])

  const logOutUser = () => {
    logout();
  }
  return (
    <div>
      {WDATA ? 
      <Navbar collapseOnSelect expand="lg" className='bg-color'>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='margin-div'>
          <Nav className="me-auto">
            <div className="icon-style">
              <Nav.Link to="#pricing"><EmailSVG /></Nav.Link>
            </div>
            <div className="icon-style">
              <Nav.Link to="#features"><SearchIcon /></Nav.Link>
            </div>
          </Nav>
          <Nav className="button-style">
            <div className='margin-div'>
            <div className='Weather-data'>
            <div className='icon-weather'><img src={WDATA.current.condition.icon} /></div>
            <div>{parseInt(WDATA.current.temp_c)}</div>
            <div>°C</div>
            </div>
            </div>
            <button className='text-style-nav' type="button" onClick={logOutUser}>Logout</button>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
       :" " }
    </div>
  )
}
