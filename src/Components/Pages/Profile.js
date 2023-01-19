import React from 'react';
import { Card } from 'react-bootstrap';
import { BsInfoCircle } from 'react-icons/bs';
import hill from '../../assets/hill.webp'
import img from '../../assets/img.jpg'
import circle2 from '../../assets/cir2.PNG'
import '../../css/Profile.css'
const Profile = () => {
    return (

        <Card style={{ width: '20rem' }} className='mt-3'>
            <div>
                <Card.Img variant="top" src={hill} style={{ filter: 'brightness(50%)' }} />
                <img src={img} alt="" style={{ width: '50px', height: '50px' }} className='rounded-circle image2'></img>
                <h6 className='text-center mt-5'>Raihan Chowdhury</h6>
                <h6 className='text-center fw-light'>Product Designer</h6>
            </div>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between' >
                    <div className='shadow rounded px-2'>
                        <h6>1,269</h6>
                        <h6 className='fw-light'>Products</h6>
                    </div>
                    <div className='shadow rounded px-2'>
                        <h6>5.2k</h6>
                        <h6 className='fw-light'>Followers</h6>
                    </div>

                </Card.Title>
                <Card.Text >
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h6>Earning</h6>
                        </div>
                        <div>
                            <BsInfoCircle></BsInfoCircle>
                        </div>
                    </div>
                    <img src={circle2} alt="" className='design' />
                    <h6 className='text-center'>76%</h6>
                    <h6 className='text-center'>$26,256</h6>
                    <h6 className='text-center fw-light'>Earning this Month</h6>
                    <div className='d-flex justify-content-center'>
                        <div ><h6 className='text-success shadow fw-light'>+2.65%</h6></div>
                        <div className='ms-3'><h6 className='fw-light'>From previous period</h6></div>
                    </div>
                </Card.Text>
                <Card.Text >
                    <h6>Recent Activity</h6>
                    <div className='d-flex justify-content-between '>
                        <div className='shadow rounded-4 px-2'>
                            <h6 className=' fw-light'>12</h6>
                            <h6 className=' fw-light mt-0'>Sep</h6>
                        </div>
                        <h6 className='mt-2 fw-light'><small>Responded to need "Volunteer activities"</small></h6>

                    </div>
                </Card.Text>
                <Card.Text >
                    <div className='d-flex justify-content-between '>
                        <div className='shadow rounded-4 px-2'>
                            <h6 className='fw-light'>11</h6>
                            <h6 className='fw-light'>Sep</h6>
                        </div>
                        <div>
                            <h6 className='fs-6 fw-light'><small>Everyone realizes would be desirable</small></h6>
                            <h6 className='fw-normal text-primary'><small>Read More</small></h6>
                        </div>
                    </div>
                </Card.Text>
                <Card.Text >
                    <div className='d-flex justify-content-between '>
                        <div className='shadow rounded-4 px-2'>
                            <h6 className='fs-6 fw-light '>10</h6>
                            <h6 className='fs-6 fw-light'>Sep</h6>
                        </div>
                        <div>
                            <h6 className='fw-light mt-2'><small>Joined the group "Boardsmanship forum"</small></h6>
                        </div>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default Profile;