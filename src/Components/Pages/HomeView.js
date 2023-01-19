import React from 'react';
import { Card } from 'react-bootstrap';
import { HiChartPie } from 'react-icons/hi';
import { FaCalendarCheck, FaSortDown, FaUsers } from 'react-icons/fa';
import Chart from './Chart';
import '../../css/HomeView.css'

const HomeView = () => {
    return (
        <section className='container'>
            <div className='d-flex gap-3 mt-3 mb-3 div-design'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            <div className='d-flex'>
                                <div className='bg-primary rounded px-3 py-2'><HiChartPie className='text-white'></HiChartPie></div>
                                <div className='ms-2'>
                                    <div>
                                        <h6 className='fw-light'>Revenue</h6>
                                        <div className='d-flex'>
                                            <div> <h6>$21,456</h6></div>
                                            <div className='ms-4 shadow rounded'> <h6 className='text-success'>+2.65%</h6></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            <div className='d-flex'>
                                <div className='bg-primary rounded px-3 py-2'><FaCalendarCheck className='text-white'></FaCalendarCheck></div>
                                <div className='ms-2'>
                                    <div>
                                        <h6 className='fw-light'>Orders</h6>
                                        <div className='d-flex'>
                                            <div> <h6>5,643</h6></div>
                                            <div className='ms-5 shadow rounded'> <h6 className='text-danger'>-0.82%</h6></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            <div className='d-flex'>
                                <div className='bg-primary rounded px-3 py-2'><FaUsers className='text-white'></FaUsers></div>
                                <div className='ms-2'>
                                    <div>
                                        <h6 className='fw-light'>Customers</h6>
                                        <div className='d-flex'>
                                            <div> <h6>42,254</h6></div>
                                            <div className='ms-5 shadow rounded'> <h6 className='text-danger'>-1.04%</h6></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div>
                <Card className="">
                    <Card.Body>
                        <div className='d-flex justify-content-between'>
                            <Card.Title className=''>Overview</Card.Title>
                            <Card.Title className=''>Sort By: <small className='fw-light'>Yearly</small><FaSortDown></FaSortDown></Card.Title>
                        </div>
                        <Card.Text className='d-flex'>
                            <div>
                                <div >
                                    <div className='d-flex justify-content-between'>
                                        <h6 className='fw-light'>This month</h6>
                                    </div>
                                    <div className='d-flex'>
                                        <h4>$24,568</h4>
                                        <h6 className='ms-3 mt-2 text-success shadow rounded'>+2.65%</h6>
                                    </div>
                                </div>
                                <div className='mt-1'>
                                    <div className='d-flex shadow'>
                                        <div className=''>
                                            <h6 className='fw-light'>Orders</h6>
                                            <h6>5643</h6>
                                        </div>
                                        <div className='ms-5'>
                                            <h6 className='fw-light ms-2'>Sales</h6>
                                            <h6 className='ms-2'>16,273</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-1'>
                                    <div className='d-flex shadow'>
                                        <div>
                                            <h6 className='fw-light'>Order Value</h6>
                                            <h6>12.03%</h6>
                                        </div>
                                        <div className='ms-5'>
                                            <h6 className='fw-light'>Customers</h6>
                                            <h6>21,456</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-1'>
                                    <div className='d-flex shadow'>
                                        <div>
                                            <h6 className='fw-light'>Income</h6>
                                            <h6>$35,652</h6>
                                        </div>
                                        <div className='ms-5'>
                                            <h6 className='fw-light'>Expenses</h6>
                                            <h6>$12,248</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ms-5 mt-3'>
                                <Chart></Chart>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </section>

    );
};

export default HomeView;