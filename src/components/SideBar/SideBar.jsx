import React from 'react'
import {Nav} from "react-bootstrap";
import "./SideBar.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { ThunderSVG } from '../SVGs/ThunderSVG';
import { AttachmentSVG } from '../SVGs/AttachmentSVG';
import ImgSVG from '../SVGs/ImgSVG';
import { FolderSVG } from '../SVGs/FolderSVG';
import { GraphSVG } from '../SVGs/GraphSVG';
import { ListIcon } from '../SVGs/ListIcon';
import {AiOutlineUnorderedList,AiOutlineFolder,AiOutlineThunderbolt} from "react-icons/ai";
import {GrAttachment} from "react-icons/gr";
import {GoGraph} from "react-icons/go";
import {BsImage} from "react-icons/bs";

export const SideBar = () => {
  let iconStyles = { color: "white", fontSize: "1.5em" };
  return (
    <div className='Total-size'>
      <div className='Flex-div'>
        <div className="uper-box-design"><Link className="Link-dec"><AiOutlineUnorderedList style={iconStyles}/></Link></div>
      <Link className="Link-dec"><AiOutlineThunderbolt value={{ color: 'white'}}/></Link>
      <Link className="Link-dec"><AiOutlineFolder/></Link>
      <Link className="Link-dec"><GoGraph/></Link>
      <Link className="Link-dec"><BsImage/></Link>
      <Link className="Link-dec">Tasks</Link>
      <Link className="Link-dec"><GrAttachment/></Link>
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