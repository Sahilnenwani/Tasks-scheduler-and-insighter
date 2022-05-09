import React from 'react';
import "./SideBar.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {AiOutlineUnorderedList,AiOutlineFolder,AiOutlineThunderbolt} from "react-icons/ai";
import {IoIosAttach} from "react-icons/io";
import {GoGraph} from "react-icons/go";
import {BsImage} from "react-icons/bs";

export const SideBar = () => {
  let iconStyles = { color: "white", fontSize: "1.5em" };
  return (
    <div className='Total-size'>
      <div className='Flex-div'>
        <div className="uper-box-design"><Link className="Link-dec"><AiOutlineUnorderedList/></Link></div>
      <Link className="Link-dec"><AiOutlineThunderbolt/></Link>
      <Link className="Link-dec"><AiOutlineFolder/></Link>
      <Link className="Link-dec"><GoGraph/></Link>
      <Link className="Link-dec"><BsImage/></Link>
      <Link className="Link-dec">Tasks</Link>
      <Link className="Link-dec"><IoIosAttach/></Link>
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