import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'

import { fetchGuests } from '../actions'
import { useDispatch } from 'react-redux'

const fakeData = [
  { id: uuidv4(), name: 'Angela' },
  { id: uuidv4(), name: 'Beyond' },
  { id: uuidv4(), name: 'David' },
  { id: uuidv4(), name: 'Ngairo' },
  { id: uuidv4(), name: 'Ayoung' },
]

// Make new containers for each tables
const fakeColumns = {
  [uuidv4()]: {
    name: 'Guests',
    items: fakeData,
  },
  [uuidv4()]: {
    name: 'Table 1',
    items: [],
  },
  [uuidv4()]: {
    name: 'Table 2',
    items: [],
  },
  [uuidv4()]: {
    name: 'Table 3',
    items: [],
  },
}

export default function SeatingPlan() {
  const dispatch = useDispatch('')
  useEffect(() => {
    dispatch(fetchGuests())
  }, [])

  const [names, setNames] = useState(fakeData)

  function handleOnDragEnd(result) {
    if (!result.destination) return
    const items = Array.from(names)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setNames(items)
  }
  return (
    <>
      <h1>Guests Names</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="fakeData">
          {(provided) => (
            <ul
              className="names"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {names.map(({ id, name }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <p>{name}</p>
                      </li>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}

// Imported actions from actions
// Debug reducer
// Link up with the backend Data
// -- Need to import <Guest /> in and map through each guest name to display rather than displaying the fake data
