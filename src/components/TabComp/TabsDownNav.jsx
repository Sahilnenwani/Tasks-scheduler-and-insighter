import React, {useState} from 'react'
import { Tabs,Tab } from 'react-bootstrap';
import "./TabsDown.scss"

export const TabsDownNav = () => {
  const [key, setKey] = useState('home');

  return (
    <div className="tabs-design">
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 tabs-overall-design"
    >
      <Tab eventKey="home" title="Backlog(2)">
      </Tab>
      <Tab eventKey="profile" title="Progress(2)">
      </Tab>
      <Tab eventKey="contact" title="Done(1)" >
      </Tab>
    </Tabs>
    </div>
  );
}
