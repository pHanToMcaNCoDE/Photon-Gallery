import React from 'react'

const GalleryItems = ({images}) => {
  return (
    <div className='max-w-[1300px] mx-auto p-4'>  
            <div className='bg-zinc-800 cursor-pointer'>
                    <img className='w-full object-cover h-[370px]' src={images.image} alt={images.name}></img>
                <p className='text-white p-2'>{images.name}</p> 
            </div>   
    </div>
  )
}

export default GalleryItems
