import React from 'react'
import './skeleton.css'

const Skeleton = () => {

    // const FeedSkeleton = () => {
        
    // }

  return (
    <div className='w-full bg-neutral-900'>
        <div className='max-w-[1200px] p-4 mx-auto'>
                <h1 className='text-[2.5rem] text-purple-500 p-10 font-mono'>Gallary</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 font-mono'>
                        <div className='bg-zinc-800 cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='text-white p-2 skeleton skeleton-text'></p>  
                        </div>
                        <div className='bg-zinc-800 cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='text-white p-2 skeleton skeleton-text'></p>  
                        </div>
                        <div className='bg-zinc-800 cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='text-white p-2 skeleton skeleton-text'></p>  
                        </div>
                        <div className='bg-zinc-800 cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='text-white p-2 skeleton skeleton-text'></p>  
                        </div>
                        <div className='bg-zinc-800 cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='text-white p-2 skeleton skeleton-text'></p>  
                        </div>
                        <div className='bg-zinc-800 cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='text-white p-2 skeleton skeleton-text'></p>  
                        </div>
                        <div className='bg-zinc-800 cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='text-white p-2 skeleton skeleton-text'></p>  
                        </div>
                        <div className='bg-zinc-800 cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='text-white p-2 skeleton skeleton-text'></p>  
                        </div>
                        <div className='bg-zinc-800 cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='text-white p-2 skeleton skeleton-text'></p>  
                        </div>
                    </div>
            </div>
        </div>
  )
}

export default Skeleton
