import React, { useState } from 'react'

const Categories = () => {
  const [toggle, setToggle] = useState(1);

  const updateToggle = (index) => {
    setToggle(index);
  }
  return (
    <div className="mx-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className='text-3xl my-5'>Categories</h1>
        <div className={toggle === 1 ? 'flex flex-col md:flex-row' : 'hidden'}>
          <div className="'w-full md:w-1/2 mt-6 order-2 md:order-1">
            <h2 className='text-lg font-medium pt-16'>Pet Grooming</h2>
            <p className='text-lg py-4'>Pet grooming is the process of maintaining your pet’s hygiene and enhancing their physical appearance, which includes tasks like washing, brushing, trimming fur, and clipping nails.</p>
            <button className='px-7 py-3 text-[#124C5F] bg-[#c7e7e1] rounded-md border-0 font-medium'>Get Started</button>

            <ul className="flex flex-row gap-5 mt-16">
              <li onClick={() => updateToggle(1)}
                  className={toggle === 1 ? 'flex flex-row bg-[#124c5f] text-white font-medium rounded-sm p-1 cursor-pointer' :
                                            'flex flex-row font-medium cursor-pointer'}>
                <img src='logo.png' className='flex w-6 h-6 mr-1' alt='logo-img'/> Pet Grooming
              </li>
              <li onClick={() => updateToggle(2)}
                  className={toggle === 2 ? 'flex flex-row bg-[#124c5f] text-white font-medium rounded-sm p-1 cursor-pointer' :
                                            'flex flex-row font-medium cursor-pointer'}>
                <img src='logo.png' className='flex w-6 h-6 mr-1' alt='logo-img'/> Pet Clinic
              </li>
              <li onClick={() => updateToggle(3)}
                  className={toggle === 3 ? 'flex flex-row bg-[#124c5f] text-white font-medium rounded-sm p-1 cursor-pointer' :
                                            'flex flex-row font-medium cursor-pointer'}>
                <img src='logo.png' className='flex w-6 h-6 mr-1' alt='logo-img'/> Pet Daycare
              </li>
              <li onClick={() => updateToggle(4)}
                  className={toggle === 4 ? 'flex flex-row bg-[#124c5f] text-white font-medium rounded-sm p-1 cursor-pointer' :
                                            'flex flex-row font-medium cursor-pointer'}>
                <img src='logo.png' className='flex w-6 h-6 mr-1' alt='logo-img'/> Pet Training
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/2 order-1'>
            <img src='grooming.png' className='align-middle' alt='' />
          </div>
        </div>

        <div className={toggle === 2 ? 'flex flex-col md:flex-row' : 'hidden'}>
          <div className="'w-full md:w-1/2 mt-6 order-2 md:order-1">
            <h2 className='text-lg font-medium pt-16'>Pet Clinic</h2>
            <p className='text-lg py-4'>The pet clinic offers comprehensive veterinary services, including medical consultations, vaccinations, and surgical procedures, ensuring the well-being of furry companions. The clinic provides compassionate care and support to pets and their owners.</p>
            <button className='px-7 py-3 text-[#124C5F] bg-[#c7e7e1] rounded-md border-0 font-medium'>Get Started</button>

            <ul className="flex flex-row gap-5 mt-16">
              <li onClick={() => updateToggle(1)}
                  className={toggle === 1 ? 'flex flex-row bg-[#124c5f] text-white font-medium rounded-sm p-1 cursor-pointer' :
                                            'flex flex-row font-medium cursor-pointer'}>
                <img src='logo.png' className='flex w-6 h-6 mr-1' alt='logo-img'/> Pet Grooming
              </li>
              <li onClick={() => updateToggle(2)}
                  className={toggle === 2 ? 'flex flex-row bg-[#124c5f] text-white font-medium rounded-sm p-1 cursor-pointer' :
                                            'flex flex-row font-medium cursor-pointer'}>
                <img src='logo.png' className='flex w-6 h-6 mr-1' alt='logo-img'/> Pet Clinic
              </li>
              <li onClick={() => updateToggle(3)}
                  className={toggle === 3 ? 'flex flex-row bg-[#124c5f] text-white font-medium rounded-sm p-1 cursor-pointer' :
                                            'flex flex-row font-medium cursor-pointer'}>
                <img src='logo.png' className='flex w-6 h-6 mr-1' alt='logo-img'/> Pet Daycare
              </li>
              <li onClick={() => updateToggle(4)}
                  className={toggle === 4 ? 'flex flex-row bg-[#124c5f] text-white font-medium rounded-sm p-1 cursor-pointer' :
                                            'flex flex-row font-medium cursor-pointer'}>
                <img src='logo.png' className='flex w-6 h-6 mr-1' alt='logo-img'/> Pet Training
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/2 order-1'>
            <img src='clinic.png' className='' alt='' />
          </div>
        </div>

        <div className={toggle === 3 ? 'flex flex-col md:flex-row' : 'hidden'}>
          <div className="'w-full md:w-1/2 mt-6 order-2 md:order-1">
            <h2 className='text-lg font-medium pt-16'>Pet Daycare</h2>
            <p className='text-lg py-4'>Pet daycare offers a safe and stimulating environment for pets while their owners are away, providing companionship, exercise, and socialization opportunities. Supervised by trained staff, pets engage</p>
            <button className='px-7 py-3 text-[#124C5F] bg-[#c7e7e1] rounded-md border-0 font-medium'>Get Started</button>

            <ul className="flex flex-row gap-5 mt-16">
              <li onClick={() => updateToggle(1)}
                  className={toggle === 1 ? 'flex flex-row bg-[#124c5f] text-white font-medium rounded-sm p-1 cursor-pointer' :
                                            'flex flex-row font-medium cursor-pointer'}>
                <img src='logo.png' className='flex w-6 h-6 mr-1' alt='logo-img'/> Pet Grooming
              </li>
              <li onClick={() => updateToggle(2)}
                  className={toggle === 2 ? 'flex flex-row bg-[#124c5f] text-white font-medium rounded-sm p-1 cursor-pointer' :
                                            'flex flex-row font-medium cursor-pointer'}>
                <img src='logo.png' className='flex w-6 h-6 mr-1' alt='logo-img'/> Pet Clinic
              </li>
              <li onClick={() => updateToggle(3)}
                  className={toggle === 3 ? 'flex flex-row bg-[#124c5f] text-white font-medium rounded-sm p-1 cursor-pointer' :
                                            'flex flex-row font-medium cursor-pointer'}>
                <img src='logo.png' className='flex w-6 h-6 mr-1' alt='logo-img'/> Pet Daycare
              </li>
              <li onClick={() => updateToggle(4)}
                  className={toggle === 4 ? 'flex flex-row bg-[#124c5f] text-white font-medium rounded-sm p-1 cursor-pointer' :
                                            'flex flex-row font-medium cursor-pointer'}>
                <img src='logo.png' className='flex w-6 h-6 mr-1' alt='logo-img'/> Pet Training
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/2 order-1'>
            <img src='dayCare.png' className='' alt='' />
          </div>
        </div>

        <div className={toggle === 4 ? 'flex flex-col md:flex-row' : 'hidden'}>
          <div className="'w-full md:w-1/2 mt-6 order-2 md:order-1">
            <h2 className='text-lg font-medium pt-16'>Pet Training</h2>
            <p className='text-lg py-4'>Pet training encompasses teaching animals essential behaviors and commands, fostering obedience and good manners. Training sessions focus on positive reinforcement techniques, such as rewards and praise.</p>
            <button className='px-7 py-3 text-[#124C5F] bg-[#c7e7e1] rounded-md border-0 font-medium'>Get Started</button>

            <ul className="flex flex-row gap-5 mt-16">
              <li onClick={() => updateToggle(1)}
                  className={toggle === 1 ? 'flex flex-row bg-[#124c5f] text-white font-medium rounded-sm p-1 cursor-pointer' :
                                            'flex flex-row font-medium cursor-pointer'}>
                <img src='logo.png' className='flex w-6 h-6 mr-1' alt='logo-img'/> Pet Grooming
              </li>
              <li onClick={() => updateToggle(2)}
                  className={toggle === 2 ? 'flex flex-row bg-[#124c5f] text-white font-medium rounded-sm p-1 cursor-pointer' :
                                            'flex flex-row font-medium cursor-pointer'}>
                <img src='logo.png' className='flex w-6 h-6 mr-1' alt='logo-img'/> Pet Clinic
              </li>
              <li onClick={() => updateToggle(3)}
                  className={toggle === 3 ? 'flex flex-row bg-[#124c5f] text-white font-medium rounded-sm p-1 cursor-pointer' :
                                            'flex flex-row font-medium cursor-pointer'}>
                <img src='logo.png' className='flex w-6 h-6 mr-1' alt='logo-img'/> Pet Daycare
              </li>
              <li onClick={() => updateToggle(4)}
                  className={toggle === 4 ? 'flex flex-row bg-[#124c5f] text-white font-medium rounded-sm p-1 cursor-pointer' :
                                            'flex flex-row font-medium cursor-pointer'}>
                <img src='logo.png' className='flex w-6 h-6 mr-1' alt='logo-img'/> Pet Training
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/2 order-1'>
            <img src='training.png' className='' alt='' />
          </div>
        </div>
    </div>
  )
}

export default Categories