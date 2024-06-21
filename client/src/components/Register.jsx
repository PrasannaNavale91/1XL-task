import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post("https://localhost:5000/register", { name, phone, email, role, password },
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          toast.success(data.message);
          setName("");
          setEmail("");
          setPassword("");
          setPhone("");
        } catch (error) {
          toast.error(error.response.data.message);
        }
    };
    
  return (
    <>
        <section className="mx-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
            <div className="w-full md:w-1/2 order-2 md:order-1 p-2">
                <h3 className='text-2xl font-bold text-[#2d5649]'>Create a new account</h3>
                <form className='space-y-8 p-5'>
                    <div className="flex flex-col gap-1">
                        <label className='text-md text-slate-700 font-semibold'>Name</label>
                        <div className='flex items-center rounded-md'>
                            <input
                            type="text"
                            className='w-[100%] h-[100%] p-6 border text-black rounded-md outline-none bg-[#87878778] placeholder:text-slate-600'
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className='text-md text-slate-700 font-semibold'>Email Address</label>
                        <div className='flex items-center rounded-md'>
                            <input
                            type="email"
                            className='w-[100%] h-[100%] p-6 border text-black rounded-md outline-none bg-[#87878778] placeholder:text-slate-600'
                            placeholder="johnDoe@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className='text-md text-slate-700 font-semibold'>Phone Number</label>
                        <div className='flex items-center rounded-md'>
                            <input
                            type="number"
                            className='w-[100%] h-[100%] p-6 border text-black rounded-md outline-none bg-[#87878778] placeholder:text-slate-600'
                            placeholder="8888888888"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className='text-md text-slate-700 font-semibold'>Password</label>
                        <div className='flex items-center rounded-md'>
                            <input
                            type="password"
                            className='w-[100%] h-[100%] p-6 border text-black rounded-md outline-none bg-[#87878778] placeholder:text-slate-600'
                            placeholder="Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit"
                        onClick={handleRegister}
                        className='btn py-4 px-10 rounded-md bg-[#124c5f] text-white hover:bg-[#c7e7e1] hover:text-[#124c5f] duration-400 cursor-pointer'>
                        Register
                    </button><br />
                    <br />
                    <Link to={"/signin"}
                        className='btn py-4 px-5 rounded-md bg-[#ffaa00] text-white hover:bg-[#ffbb00] duration-400 cursor-pointer'
                    >
                        SignIn Now
                    </Link>
                </form>
            </div>
            <div className="w-full md:w-1/2 order-2 md:order-1">
                <img src="dayCare.png" className='' alt="login" />
            </div>
        </section>
    </>
  )
}

export default Register