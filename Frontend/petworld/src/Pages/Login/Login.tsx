// "use client"
import React,{useState} from 'react'
import { Row,Col,Button } from 'react-bootstrap';
import "./Login.css";
import LoginForm from './LoginForm';

const Login:React.FC = () => {
  return (
    <div className="container">
      <Row className='border border-dark'>
        <Col className="bg-primary">
          <h1 className='d-flex justify-content-center' style={{color:"white"}}>Cat</h1>
        </Col>
        <Col className='d-flex justify-content-center bg-light'>
          <h1>Nav Bar</h1>
        </Col>
        <Col className="bg-primary">
          <h1 className='d-flex justify-content-center' style={{color:"white"}}>
            Dog
          </h1>
        </Col>
      </Row>
      <center className="mt-3">
        <h1>L.o.g.i.n</h1>
      </center>

<div className='mt-4 mb-4'>
  <p>Welcome back! We're glad to see you again.</p>
</div>
<div className=''>
  <LoginForm/>
</div>









    </div>
  )
}

export default Login