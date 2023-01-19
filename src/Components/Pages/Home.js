import React from 'react';
import { Col, Row } from 'react-bootstrap';
import HomeView from './HomeView';
import NavBar from './NavBar';
import Profile from './Profile';
import ShowDetails from './ShowDetails';

const Home = () => {
    return (
        <div>

            <Row>
                <NavBar></NavBar>
                <Col lg='8'>
                    <HomeView></HomeView>
                    <ShowDetails></ShowDetails>
                </Col>
                <Col lg='4'>
                    <Profile></Profile>
                </Col>
            </Row>
        </div>
    );
};

export default Home;