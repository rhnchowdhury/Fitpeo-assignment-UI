import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaSortDown } from 'react-icons/fa';
import ShowChart from './ShowChart';
import { BsCircleFill } from "react-icons/bs";
import circle1 from '../../assets/cir1.PNG'

const ShowDetails = () => {
    return (

        <section className='container'>
            <div className='d-flex gap-1 mt-3 '>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <div className='d-flex justify-content-between'>
                            <Card.Title className=''><h6>UserActivity</h6></Card.Title>
                            <Card.Title className=''><h6 className='fw-light'>Weekly<FaSortDown></FaSortDown></h6></Card.Title>
                        </div>
                        <Card.Text >
                            <div >
                                <div>
                                    <h6 className='fw-light'>This month</h6>
                                    <h6>16,543</h6>
                                </div>
                                <div className='d-flex justify-content-end mb-5'>
                                    <h6 className='fw-light'><strong className='text-primary'><BsCircleFill></BsCircleFill></strong>Current</h6>
                                    <h6 className='fw-light ms-1'><strong className='text-danger'><BsCircleFill></BsCircleFill></strong>Previous</h6>
                                </div>

                                <ShowChart></ShowChart>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card >
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <div className='d-flex justify-content-between'>
                            <Card.Title className=''><h6>Order Stats</h6></Card.Title>
                            <Card.Title className=''>...</Card.Title>
                        </div>
                        <Card.Text >
                            <div className=''>
                                <div className='row align-items-end'>
                                    <Image src={circle1}></Image>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6>Completed</h6>
                                    <h6>Pending</h6>
                                    <h6>Cancel</h6>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card >
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <div className='d-flex justify-content-between'>
                            <Card.Title className=''><h6>Top Product</h6></Card.Title>
                            <Card.Title className=''><h6 className='fw-light'>Monthly<FaSortDown></FaSortDown></h6></Card.Title>
                        </div>
                        <Card.Text>
                            <div >
                                <div className='d-flex justify-content-between mt-2'>
                                    <strong className='bg-primary rounded-5 mt-2 p-2 text-white '>#1</strong>
                                    <div>
                                        <h6 className='fw-normal'>Polo blue T-shirt <small ></small></h6>
                                        <h6 >$25.4</h6>
                                    </div>
                                    <h6>3.82k</h6>
                                </div>
                                <div className='d-flex justify-content-between mt-3'>
                                    <strong className='bg-primary rounded-5 mt-2 p-2 text-white '>#2</strong>
                                    <div>
                                        <h6 className='fw-normal'>Hoodie for men</h6>
                                        <h6>$24.5</h6>
                                    </div>
                                    <h6>3.14k</h6>
                                </div>
                                <div className='d-flex justify-content-between mt-3'>
                                    <strong className='bg-primary rounded-5 mt-2 p-2 text-white '>#3</strong>
                                    <div className='ms-0'>
                                        <h6 className='fw-normal'>Red Color cap</h6>
                                        <h6>$22.5</h6>
                                    </div>
                                    <h6>2.84k</h6>
                                </div>
                                <div className='d-flex justify-content-between mt-3'>
                                    <strong className='bg-primary rounded-5 mt-2 p-2 text-white '>#4</strong>
                                    <div>
                                        <h6 className='fw-normal'>Pocket T-shirt</h6>
                                        <h6>$19.5</h6>
                                    </div>
                                    <h6>2.06k</h6>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card >
            </div>
        </section>
    );
};

export default ShowDetails;