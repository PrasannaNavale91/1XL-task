import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
        fullname: data.fullname,
        email: data.email,
        phone: data.phone
    }
    await axios.post(`http://localhost:5000/`, userInfo)
    .then((res)=> {
        console.log(res.data)
        if (res.data) {
            toast.success('Your resposne successfully recorded..!');
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
    })
    .catch((err)=> {
        if(err.response){
            console.log(err)
            toast.error("Error: ", + err.response.data.message);
        }
    })
  };
  return (
    <div className='mx-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 '>
      <div className='w-full md:w-1/2 pt-10 lg:px-16'>
        <img src='grooming.png' alt='' />
      </div>
      <div className="w-full md:w-1/2 pt-10 p-5">
        <form method="" onSubmit={handleSubmit(onSubmit)} >
          <h2 className='font-bold text-4xl text-center py-2 text-black'>Have A Question?</h2>
          <h3 className="font-bold text-lg text-center py-2 text-black">Our phones and live chat are open 9-8PM CT, Monday through Friday</h3>
          <div className="mt-4 space-y-2">
            <p className='text-stone-600 font-semibold'>First and Last Name <span className='text-red-500'>*</span></p>
            <br />
            <input
                type="text"
                className="w-[90%] px-3 py-5 bg-stone-200 rounded-md outline-none"
                {...register("fullname", { required: true })}
            />
            <br />
            {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="mt-4 space-y-2">
            <p className='text-stone-600 font-semibold'>Your Email <span className='text-red-500'>*</span></p>
            <br />
            <input
                type="email"
                className="w-[90%] px-3 py-5 bg-stone-200 rounded-md outline-none"
                {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="mt-4 space-y-2">
            <p className='text-stone-600 font-semibold'>Phone <span className='text-red-500'>*</span></p>
            <br />
            <input
                type="tel"
                className="w-[90%] px-3 py-5 bg-stone-200 rounded-md outline-none"
                {...register("phone", { required: true, maxLength: 10 })}
            />
            <br />
            {errors.phone && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="mt-4 space-y-2">
            <p className='text-stone-600 font-semibold'>Message</p>
            <br />
            <textarea
                rows="4"
                className="w-[90%] px-3 py-5 bg-stone-200 rounded-md outline-none"
                {...register("message", { required: true, maxLength: 10 })}
            ></textarea>
          </div>
          <div className="space-y-2 mt-4">
            <button className="bg-pink-500 text-white rounded-md px-7 py-3 hover:bg-pink-700 duration-200"
              onSubmit={handleSubmit(onSubmit)}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact