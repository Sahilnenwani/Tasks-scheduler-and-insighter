import React from 'react';
import "./SideBar.css"
import { Link } from 'react-router-dom';
import {AiOutlineUnorderedList,AiOutlineFolder,AiOutlineThunderbolt} from "react-icons/ai";
import {IoIosAttach} from "react-icons/io";
import {GoGraph} from "react-icons/go";
import {BsImage} from "react-icons/bs";

export const SideBar = () => {
  let iconStyles = { color: "white", fontSize: "1.5em" };
  return (
    <div className='Total-size'>
      <div className='Flex-div'>
        <div className="uper-box-design"><Link to="/" className="Link-dec"><AiOutlineUnorderedList/></Link></div>
      <Link to="/" className="Link-dec"><AiOutlineThunderbolt/></Link>
      <Link to="/" className="Link-dec"><AiOutlineFolder/></Link>
      <Link to="/" className="Link-dec"><GoGraph/></Link>
      <Link to="/" className="Link-dec"><BsImage/></Link>
      <Link to="/" className="Link-dec">Tasks</Link>
      <Link to="/" className="Link-dec"><IoIosAttach/></Link>
      </div>
         {/* <Nav className="flex-sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
            <div>
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            </div>
            <div>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            </div>
            <div>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            </div>
            </Nav> */}
    </div>
  )
}

//col-md-12 d-none d-md-block bg-light sidebar