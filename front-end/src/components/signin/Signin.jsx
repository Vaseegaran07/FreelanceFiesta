import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Components from './components';

function Signin() {
  const [signIn, toggle] = useState(true);
  const [loginData, setLoginData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!validateEmail(loginData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!validatePassword(loginData.password)) {
      newErrors.password = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/reg', loginData);
      console.log('Response:', response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      alert('Registration successful');
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error('Registration Error:', error.response ? error.response.data : error.message);
      alert('Registration failed');
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', loginData);
      console.log('Response:', response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      alert('Sign in successful');
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error('Sign in Error:', error.response ? error.response.data : error.message);
      alert('Sign in failed');
    }
  };

  return (
    <div>
      <style>
        {`
          .imggg {
            width: 300px;
            height: 300px;
            background-size:cover;
            border-radius: 20px;
            object-fit: cover;
          }
        `}
      </style>
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleRegister}>
            <Components.Title>Create An Account</Components.Title>
            <Components.Input
              type='text'
              placeholder='Name'
              name='name'
              value={loginData.name}
              onChange={handleChange}
              required
            />
            <Components.Input
              type='email'
              placeholder='Email'
              name='email'
              value={loginData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            <Components.Input
              type='password'
              placeholder='Password'
              name='password'
              value={loginData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            <Components.Button type='submit'>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSignIn}>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type='email'
              placeholder='Email'
              name='email'
              value={loginData.email}
              onChange={handleChange}
              required
            />
            <Components.Input
              type='password'
              placeholder='Password'
              name='password'
              value={loginData.password}
              onChange={handleChange}
              required
            />
            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
            <Components.Button type='submit'>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <img src="../../../public/img/imgg1.gif" className="imggg" alt="Welcome" />
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default Signin;
