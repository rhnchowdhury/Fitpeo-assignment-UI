import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSide from '../Pages/LeftSide';

const Main = () => {
    return (
        <div>
            <Row>
                <Col lg='2'>
                    <LeftSide></LeftSide>
                </Col>
                <Col lg='10'>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </div>
    );
};

export default Main;