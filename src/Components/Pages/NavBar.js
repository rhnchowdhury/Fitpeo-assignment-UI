import React from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import { FaFlagUsa } from "react-icons/fa";
import { HiOutlineBell, HiOutlineCog, HiOutlineViewGrid } from "react-icons/hi";
import img from '../../assets/img.jpg';
import '../../css/NavBar.css';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
                <Nav className='nav-design'>
                    <Nav.Link href="#deets">
                        <BsSearch></BsSearch>
                    </Nav.Link>
                    <Nav.Link href="#deets">
                        <FaFlagUsa></FaFlagUsa>
                    </Nav.Link>
                    <Nav.Link href="#deets">
                        <HiOutlineViewGrid></HiOutlineViewGrid>
                    </Nav.Link>
                    <Nav.Link href="#deets">
                        <HiOutlineBell></HiOutlineBell>
                    </Nav.Link>
                    <Nav.Link href="#deets">
                        <HiOutlineCog></HiOutlineCog>
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        <Image src={img} style={{ width: '30px', height: '30px' }} className='rounded-circle'></Image>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >


    );
};

export default NavBar;