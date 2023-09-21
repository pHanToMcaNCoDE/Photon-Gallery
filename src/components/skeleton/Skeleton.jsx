import React from 'react'
import './skeleton.css'

const Skeleton = () => {

    // const FeedSkeleton = () => {
        
    // }

  return (
    <div className='w-full bg-neutral-900'>
        <div className='max-w-[1200px] p-4 mx-auto'>
            <h1 className='text-purple-500 text-[2.2rem] text-center font-mono'>Loading...</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 font-mono'>
                        <div className='cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='p-2 skeleton skeleton-text'></p>  
                        </div>
                        <div className='cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='p-2 skeleton skeleton-text'></p>  
                        </div>
                        <div className='cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='p-2 skeleton skeleton-text'></p>  
                        </div>
                        <div className='cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='p-2 skeleton skeleton-text'></p>  
                        </div>
                        <div className='cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='p-2 skeleton skeleton-text'></p>  
                        </div>
                        <div className='cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='p-2 skeleton skeleton-text'></p>  
                        </div>
                        <div className='cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='p-2 skeleton skeleton-text'></p>  
                        </div>
                        <div className='cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='p-2 skeleton skeleton-text'></p>  
                        </div>
                        <div className='cursor-pointer'>
                            <div className='skeleton w-full object-cover h-[370px]' src='' alt=''></div>
                            <p className='p-2 skeleton skeleton-text'></p>  
                        </div>
                    </div>
            </div>
        </div>
  )
}

export default Skeleton
