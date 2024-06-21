import React from 'react'

const AboutUs = () => {
  return (
    <>
      <div className='mx-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 dark:bg-slate-900 dark:text-white'>
        <div className='w-full md:w-1/2 order-2 md:order-1'>
          <div className='space-y-12'>
            <span className='text-3xl my-5'>
              About Us
            </span>
            <h2 className='text-4xl font-bold'>
              We care about your pets as a child!
            </h2>
            <p className='text-xl font-semibold'>
              Bring to the table win-win survival strategies to ensure proactive domination.
            </p>
            <p className=''>
              Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Taking seamless key performance indicators offline to maximize the long tail.
            </p>
          </div>
          <button className="mt-6 mr-6 px-9 py-4 text-[#124C5F] bg-[#c7e7e1] rounded-md font-medium">Learn More</button>
          <button className="mx-6 px-9 py-4 text-[#124C5F] bg-[#c7e7e1] rounded-md border border-[#124C5F] font-medium">Purchase Now</button>
        </div>
        <div className='w-full md:w-1/2 order-1 md:ml-12'>
          <img src='clinic.png' className='md:w-[550px]' alt='team-image' />
        </div>
      </div>
    </>
  )
}

export default AboutUs