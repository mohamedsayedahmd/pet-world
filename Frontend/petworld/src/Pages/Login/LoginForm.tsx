import React from 'react'
import { Row,Col,Button } from 'react-bootstrap';
import "./Login.css";

const LoginForm : React.FC= () => {
  return (
    <div>

      {/* Username */}
      <Row >
        <Col xs={3} xl={4}></Col>
        <Col  xs={6} xl={4}>
             <h5>Username</h5>
             <input className='mx-3 w-75' type="text"/>
        </Col>
        <Col xs={3} xl={4}></Col>
      </Row>

      {/* Password */}
      <Row>
      <Col xs={3} xl={4}></Col>
        <Col xs={6} xl={4}>
             <h5>Password</h5>
             <input className='login_input_username mx-3 w-75' type="password"/>
        </Col>
        <Col xs={3} xl={4}></Col>
      </Row>

      {/* Button */}
      <Row>
        <Col xs={4} xl={4}></Col>
        <Col xs={4} xl={4} className="d-flex ">
            <Button className='mt-2 login_button '>
                <span className="login_button_title">/\/→</span>
            </Button>
        </Col>
        <Col xs={4} xl={4}></Col>
      </Row>


        
    </div>
  )
}

export default LoginForm