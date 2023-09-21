import React, { useState } from 'react'
// import g from '../assets/1.jpg'
// import g2 from '../assets/2.jpg'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { arrayMove, SortableContext, horizontalListSortingStrategy, verticalListSortingStrategy } from '@dnd-kit/sortable'
// import { images } from '../Data/Data'
// import { Result } from 'postcss'
import GalleryItems from './GalleryItems'
import { images } from '../Data/Data'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const Gallary = () => {

// const [characters, updateCharcters] = useState(images)


// function onDragEnd(result) {

//     if(!result.destination) return;
//     const items = Array.from(characters)
//     const [reorderItem] = item.splice(result.source.index, 1);
//     items.slice(result.destination.index, 0, reorderItem)

//     updateCharcters(items)
// }


  return (
    <div className='w-full bg-neutral-900'>
        <div className='max-w-[1200px] p-4 mx-auto'>
            <h1 className='text-[2.5rem] text-purple-500 p-10 font-mono'>Gallary</h1>
            <DragDropContext>
                <Droppable droppableId='items'>
                    {(provided) => (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 font-mono' {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                images.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div {...provided.dragHandleProps} {...provided.dragHandleProps} ref={provided.innerRef}
                                            className='bg-zinc-800 cursor-pointer'>
                                                <img className='w-full object-cover h-[370px]' src={item.image} alt={item.name}></img>
                                                <p className='text-white p-2'>{item.name}</p>  
                                            </div>
                                        )}
                                    </Draggable>
                                ))
                            }
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    </div>
  )
}

export default Gallary
