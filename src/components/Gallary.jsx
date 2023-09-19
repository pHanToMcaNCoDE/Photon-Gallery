import React from 'react'
import g from '../assets/1.jpg'
import g2 from '../assets/2.jpg'

const Gallary = () => {
  return (
    <div className='w-full bg-neutral-900'>
        <div className='max-w-[1200px] p-4 mx-auto'>
            <h1 className='text-[2.5rem] text-purple-500 p-10 font-mono'>Gallary</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 font-mono'>

                <div className='bg-zinc-800 cursor-pointer'>
                    <div className='relative'>
                        <img className='w-full object-cover h-[370px]' src={g} alt='Image Gallary'></img>
                    </div>
                        <p className='text-white p-2'>Image Name</p> 
                </div>

                <div className='bg-zinc-800 cursor-pointer'>
                    <div className='relative'>
                        <img className='w-full object-cover h-[370px]' src={g2} alt='Image Gallary'></img>
                    </div>
                        <p className='text-white p-2'>Image Name</p> 
                </div>


                <div className='bg-zinc-800 cursor-pointer'>
                    <div className='relative'>
                        <img className='w-full object-cover h-[370px]' src={g} alt='Image Gallary'></img>
                    </div>
                        <p className='text-white p-2'>Image Name</p> 
                </div>

                <div className='bg-zinc-800 cursor-pointer'>
                    <div className='relative'>
                        <img className='w-full object-cover h-[370px]' src={g2} alt='Image Gallary'></img>
                    </div>
                        <p className='text-white p-2'>Image Name</p> 
                </div>


                <div className='bg-zinc-800 cursor-pointer'>
                    <div className='relative'>
                        <img className='w-full object-cover h-[370px]' src={g} alt='Image Gallary'></img>
                    </div>
                        <p className='text-white p-2'>Image Name</p> 
                </div>

                <div className='bg-zinc-800 cursor-pointer'>
                    <div className='relative'>
                        <img className='w-full object-cover h-[370px]' src={g2} alt='Image Gallary'></img>
                    </div>
                        <p className='text-white p-2'>Image Name</p> 
                </div>


                <div className='bg-zinc-800 cursor-pointer'>
                    <div className='relative'>
                        <img className='w-full object-cover h-[370px]' src={g} alt='Image Gallary'></img>
                    </div>
                        <p className='text-white p-2'>Image Name</p> 
                </div>

                <div className='bg-zinc-800 cursor-pointer'>
                    <div className='relative'>
                        <img className='w-full object-cover h-[370px]' src={g2} alt='Image Gallary'></img>
                    </div>
                        <p className='text-white p-2'>Image Name</p> 
                </div>


                <div className='bg-zinc-800 cursor-pointer'>
                    <div className='relative'>
                        <img className='w-full object-cover h-[370px]' src={g} alt='Image Gallary'></img>
                    </div>
                        <p className='text-white p-2'>Image Name</p> 
                </div>

                <div className='bg-zinc-800 cursor-pointer'>
                    <div className='relative'>
                        <img className='w-full object-cover h-[370px]' src={g2} alt='Image Gallary'></img>
                    </div>
                        <p className='text-white p-2'>Image Name</p> 
                </div>

                
            </div>
            
        </div>
    </div>
  )
}

export default Gallary
