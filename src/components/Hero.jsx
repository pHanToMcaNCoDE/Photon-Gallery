import React, { useEffect, useState } from 'react'
import './hero.css'
// import './hero.js'
import {BsSearch, BsCamera2} from 'react-icons/bs'
import {GoSignOut} from 'react-icons/go'
import imageOne from '../components/images/planet.svg'
import imageTwo from '../components/images/astronaut.svg'
// import Navbar from './Navbar'
import Gallary from './Gallary'
import { images } from '../Data/Data'
import { useUserAuth } from '../context/UserAuthContext'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Skeleton from '../components/skeleton/Skeleton'

const Hero = () => {


    const [input, setInput] = useState('')

    const [characters, updateCharacters] = useState(images)


    const handleOnDragEnd = (result) => {

        if(!result.destination) return;
        const items = Array.from(characters);

        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters(items)
    }


    const {user, logOut} = useUserAuth();

      

  const handleSignOut = async () => {
    try{
      await logOut();
    }catch(err){
      console.log(err.message)
    }
  }

  return (
    <div>
        
      <div className="permission_denied">
          <div className='max-w-[1200px] mx-auto'>
            <nav className='p-3 w-full flex justify-between items-center'>
                <div className='flex justify-between items-center cursor-pointer'>
                    <BsCamera2 className='text-white' size={22}/>
                    <p className='ml-3 text-purple-500 font-mono text-[.8rem] '>Photon-Gallary</p>
                </div>

                <div className='p-2 flex items-center justify-between w-[45%] bg-transparent border border-white rounded-lg'>
                    <input type='text' id='search' className='px-1 outline-none w-[70%] text-white placeholder:text-white bg-transparent' placeholder='What image are you looking for?' onChange={(e) => setInput(e.target.value)}></input>
                    <BsSearch size={26} className='text-white'/>
                </div>

                <button className='cursor-pointer flex justify-between items-center' onClick={handleSignOut}>
                    <GoSignOut className='text-purple-600' size={26}/>
                </button>
            </nav>
        </div>
          <div className="denied__wrapper">
              <h1 className='text-center mt-3 mr-auto ml-auto text-white font-mono text-[1.6rem] w-full'>Welcome {user && user.email}</h1>
              <img id="astronaut" src={imageTwo} />
              <img id="planet" src={imageOne} />
          </div>

        </div>

        {/* <Gallary/> */}

        <div className='w-full bg-neutral-900'>
                    <div className='max-w-[1200px] p-4 mx-auto'>
                        <h1 className='text-[2.5rem] text-purple-500 p-10 font-mono'>Gallary</h1>
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId='images'>
                                {(provided) => (
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 font-mono' {...provided.droppableProps} ref={provided.innerRef}>
                                        {
                                            characters.filter(item => item.name.toLowerCase().includes(input)).map(({id, name, image}, index) => (
                                                <Draggable draggable={true} key={id} draggableId={id} index={index}>
                                                    {(provided) => (
                                                        <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                                                        className='bg-zinc-800 cursor-pointer'>
                                                            <img className='w-full object-cover h-[370px]' src={image} alt={name}></img>
                                                            <p className='text-white p-2'>{name}</p>  
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))
                                        }
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </div>
                
        </div>
    </div>
  )
}

export default Hero
