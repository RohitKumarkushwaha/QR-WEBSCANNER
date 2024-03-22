import React, { useEffect, useState } from 'react';
import axios from 'axios';
import frameImg from "../assets/signup.webp"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useToast } from '../Context/ToastContext';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {



    const Navigate = useNavigate  ();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   
  const showToast = useToast();
  const API_URL = process.env.REACT_APP_BACKEND_URL;
 
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        Navigate('/')
    }
},[Navigate])

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        name,
        email,
        password,
      });
      if(response){
        showToast('Signup Successful', 'success');
        setName('')
        setEmail('')
        setPassword('')

      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        showToast('Email already exists', 'error');
      } else {
        showToast('Signup failed', 'error');
      }
    }
  };

  return (
    <div className="  grid min-h-[calc(100vh-3.5rem)] place-items-center  bg-teal-300	">
    <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12 background-color: #f8f9fa bg-richblack-800">
          <div className="  mx-auto w-11/12 max-w-[450px] md:mx-0 ">
        <h2 className="text-3xl font-semibold text-center mb-6">Signup</h2>
        <form onSubmit={handleSignup}className="flex w-full flex-col gap-y-4">
          <div className="mb-4">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
               Name <sup className="text-pink-800">*</sup>
            </p>
           
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded shadow appearance-none"
              placeholder="Your name"
            />
              </label>
          </div>
          <div className="mb-4">
          <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-red-800">*</sup>
          </p>
             
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded shadow appearance-none"
              placeholder="Your email"
            />
            </label>
          </div>
          <div className="mb-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Create Password <sup className="text-pink-800">*</sup>
            </p>
             
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded shadow appearance-none"
              placeholder="Your password"
            />
            
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Signup
          </button>
          <div className='text-center py-3'>Already a Member? <Link to={'/login'} className='text-gray-600'>Log In</Link></div>

        </form>
        </div>
        <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
            
            <img
              src={frameImg}
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

export default Signup;
