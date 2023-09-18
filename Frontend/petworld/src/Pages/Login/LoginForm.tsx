import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { animated, useSpring } from '@react-spring/web';
import './Login.css';

const LoginForm: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const fade_button = useSpring({
    backgroundColor: isChecked ? 'green' : 'red',
  });

  const handleCheckboxChange = () => {
    // Toggle the isChecked state when the checkbox is clicked
    setIsChecked(!isChecked);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Col xs={12} md={6} lg={4}>
        {/* Username */}
        <div className="mb-3">
          <h5>Username</h5>
          <input className="form-control" type="text" />
        </div>

        {/* Password */}
        <div className="mb-3">
          <h5>Password</h5>
          <input className="form-control" type="password" />
        </div>

        {/* Button */}
        <div className="mb-3 text-center">
          <animated.button style={fade_button} className="btn btn-primary login_button">
            <span className="login_button_title">Login</span>
          </animated.button>
        </div>

        {/* CheckBox */}
        <div className="form-check text-center">
          <input
            className="form-check-input"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            id="checkMe"
          />
          <label className="form-check-label" htmlFor="checkMe">
            Accept All Terms
          </label>
        </div>
      </Col>
    </div>
  );
};

export default LoginForm;
