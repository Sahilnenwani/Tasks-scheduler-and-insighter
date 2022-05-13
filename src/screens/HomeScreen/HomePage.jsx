import React, { useEffect,useState } from 'react';
import { NavBar } from '../../components/Navbar/NavBar';
import { Container, Row, Col } from "react-bootstrap";
import { SideBar } from '../../components/SideBar/SideBar';
import "./HomePage.scss"
import { TabsDownNav } from '../../components/TabComp/TabsDownNav';
import { DayChart } from '../../components/GraphCharts/DayChart';
import ToDoCode from '../ToDo/ToDoApp';


export const HomePage = () => {
// const [checkLoader, setCheckLoader] = useState(false)


  return (
    <div className="home-page-size">
      <Row lg={14} className="Size-total">
        <Col lg={2} className="sideBar-style" >
          <SideBar></SideBar>
        </Col>
        <Col lg={11}  >
           <Row className="Nav-items">
              <NavBar></NavBar>
              <TabsDownNav />
            </Row>
            <Row className='todos-style' > 
              <Col lg={6} > 
              <div className="ToDocode">
              <ToDoCode />
              </div>
              </Col>
              <Col lg={5}>
              <DayChart className="day-chart-style"/>
              </Col>
            </Row>
          
        </Col>
      </Row>
    </div>
  )
}
