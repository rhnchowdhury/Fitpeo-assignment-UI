import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BsBox, BsMenuUp } from 'react-icons/bs';
import { FaAngleDown, FaAngleUp, FaCalendarAlt, FaFileInvoice, FaRegCalendarCheck, FaRegCalendarPlus, FaRegCommentDots, FaRegEnvelope, FaTrafficLight, FaUserCheck, FaWifi } from 'react-icons/fa';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { RiShoppingBasketFill } from "react-icons/ri";
import { GrFormEdit } from "react-icons/gr";

const LeftSide = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav defaultActiveKey="/home" className="flex-column">
                    <h6 className='text-end text-white'><BsMenuUp></BsMenuUp></h6>
                    <h6 >Menu</h6>
                    <Nav.Link href="/home"><HiOutlineViewGrid></HiOutlineViewGrid> Dashboards <small className='align-items-end'><FaAngleUp></FaAngleUp></small> </Nav.Link>
                    <Nav.Link href="/home">Ecommerce</Nav.Link>
                    <Nav.Link eventKey="link-1">Sass</Nav.Link>
                    <Nav.Link eventKey="link-2">Crypto</Nav.Link>
                    <h6 >Applications</h6>
                    <Nav.Link eventKey="link-3"><FaCalendarAlt></FaCalendarAlt> Calender</Nav.Link>
                    <Nav.Link eventKey="link-4"><FaRegCommentDots></FaRegCommentDots> Chat</Nav.Link>
                    <Nav.Link eventKey="link-5"><FaRegCalendarPlus></FaRegCalendarPlus> File Manager</Nav.Link>
                    <Nav.Link eventKey="link-6"><FaRegCalendarCheck></FaRegCalendarCheck> Ecommerce <FaAngleDown></FaAngleDown></Nav.Link>
                    <Nav.Link eventKey="link-7"><FaRegEnvelope></FaRegEnvelope> Email <FaAngleDown></FaAngleDown></Nav.Link>
                    <Nav.Link eventKey="link-8"><FaFileInvoice></FaFileInvoice> Invoices <FaAngleDown></FaAngleDown></Nav.Link>
                    <Nav.Link eventKey="link-9"><RiShoppingBasketFill></RiShoppingBasketFill> Projects <FaAngleDown></FaAngleDown></Nav.Link>
                    <Nav.Link eventKey="link-10"><FaWifi></FaWifi> Contacts <FaAngleDown></FaAngleDown></Nav.Link>
                    <h6 >Layouts</h6>
                    <h6 >Pages</h6>
                    <Nav.Link eventKey="link-11"><FaUserCheck></FaUserCheck> Authentication <FaAngleDown></FaAngleDown></Nav.Link>
                    <Nav.Link eventKey="link-12"><BsBox></BsBox> Utility <FaAngleDown></FaAngleDown></Nav.Link>
                    <h6 >Components</h6>
                    <Nav.Link eventKey="link-13"><FaTrafficLight></FaTrafficLight> UI Elements <FaAngleDown></FaAngleDown></Nav.Link>
                    <Nav.Link eventKey="link-14"><GrFormEdit></GrFormEdit> Forms <FaAngleDown></FaAngleDown></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default LeftSide;