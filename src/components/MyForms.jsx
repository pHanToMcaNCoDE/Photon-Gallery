import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import imageOne from '../components/images/planet.svg'
import imageTwo from '../components/images/astronaut.svg'
import './login.css'
// import {BarLoader} from 'react-spinners/BarLoader'

const MyForms = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true)
    setError("");
    try {
      await signIn(email, password);
      navigate("/home");
      setLoading(false)
    } catch (err) {
      setError(err.message);
      setLoading(false)
    }
  };


  return (

                    <div className='w-full flex flex-col md:flex-row lg:flow-row justify-between items-center'>
                        <div className='w-full md:w-[50%] lg:w-[50%] md:h-screen lg:h-screen'>
                            <div className="permission_denied">
                            <div className="denied__wrapper">
                                <img id="astronaut" src={imageTwo} />
                                <img id="planet" src={imageOne} />
                            </div>
                            </div>
                        </div>

                        <div className='w-full md:w-[50%] lg:w-[50%]'>
                            
                            <Form onSubmit={handleSubmit} className='mx-auto my-0 md:my-[18%] lg:my-[20%] w-[55%] h-[50%] p-3'>
                                {error && <div className="bg-rose-100 border border-rose-400 text-rose-400 font-mono tracking-wider p-2 rounded-lg">{error}</div>}
                                <h1 className='text-xl md:text-2xl lg:text-3xl text-purple-500 font-mono px-1 py-3 tracking-widest'> SignIn!</h1>
                                <p className='text-[.8rem] font-mono tracking-wider '>Don't have an account?  😁</p>
                            
                            <div className='flex flex-col my-3'>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <label className='relative flex items-center'>
                                    <Form.Control
                                        className='email my-3 outline-none border w-full transition duration-300 border-black border-opacity-50 rounded-md focus:border-purple-500 focus:text-black px-2 py-2'
                                    type="email"
                                    placeholder="E-mail Address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <span className='bg-white text-[.9rem] text-black font-mono text-opacity-80 absolute left-0 top-6 mx-6 px-1 transition duration-300 input-text'>E-mail:</span>
                                </label>
                            </Form.Group>
                                
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <label className='relative flex items-center'>
                                    <Form.Control
                                        className='pwd my-3 outline-none border w-full transition duration-300 border-black border-opacity-50 rounded-md focus:border-purple-500 focus:text-black px-2 py-2'
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    />                
                                    <span className='bg-white text-[.9rem] text-black font-mono text-opacity-80 absolute left-0 top-6 mx-6 px-1 transition duration-300 input-text'>Password:</span>
                                </label>
                            </Form.Group>

                                <Button className='bg-purple-500 text-md font-mono text-white border border-purple-500 p-2 rounded-md my-2' type="Submit">
                                Sign In
                                </Button>
                            </div>
                            </Form>
                        </div>
                    </div> 
                   
  );
};

export default MyForms;



