import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Img from "../assets/login.webp"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useToast } from '../Context/ToastContext'; 
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function Login() {
    const Navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const showToast = useToast();
  const { setIsLoggedIn } = useAuth();
  
  const API_URL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        Navigate('/')
    }else{
        Navigate('/login')
    }
},[Navigate])
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);      
      showToast('Login Successful', 'success');
      setIsLoggedIn(true)
      Navigate('/')
    } catch (error) {
      if (error.response && error.response.status === 401) {
        showToast('Incorrect email or password', 'error');
      } else {
        showToast('Login failed', 'error');
      }
    }
  };

  return (
    <div className="  grid min-h-[calc(100vh-3.5rem)] place-items-center  bg-teal-300	">
    <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12 background-color: #f8f9fa bg-richblack-800">
          <div className="  mx-auto w-11/12 max-w-[450px] md:mx-0 ">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded shadow appearance-none"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded shadow appearance-none"
              placeholder="Your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Login
          </button>
          <div className='text-center py-3'>Not a Member? <Link to={'/signup'} className='text-gray-600'>Sign Up</Link></div>
        </form>
      </div>
      <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
            
            <img
              src={Img}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 right-4 z-10"
            />
          </div>
          </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        limit={1}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default Login;
