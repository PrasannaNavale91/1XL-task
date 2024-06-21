import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/signin",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
      <section className="mx-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 order-2 md:order-1 p-2">
          <h3 className='text-2xl font-bold'>Login to your account</h3>
          <form className='space-y-8 p-5'>
            <div className="flex flex-col gap-1">
              <label className='text-md text-slate-700 font-semibold'>Email Address</label>
              <div className='flex items-center rounded-md'>
                <input
                  type="email"
                  className='w-[100%] h-[100%] p-6 border text-black rounded-md outline-none bg-[#87878778] placeholder:text-slate-600'
                  placeholder="abc@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              className='btn py-4 px-10 rounded-md bg-[#124c5f] text-white hover:bg-[#c7e7e1] hover:text-[#124c5f] duration-400 cursor-pointer'
              onClick={handleLogin}>
              Login
            </button><br/>
            <br />
            <Link to={"/register"} className='btn py-3 px-4 rounded-md bg-[#ffaa00] text-white hover:bg-[#ffbb00] duration-400 cursor-pointer'>Register Now</Link>
          </form>
        </div>
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img src="training.png" className='' alt="login" />
        </div>
      </section>
    </>
  )
}

export default SignIn