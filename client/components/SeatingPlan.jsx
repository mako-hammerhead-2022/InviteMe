import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const guestNames = [
  {
    id: 'angela',
    name: 'Angela',
  },
  {
    id: 'ayoung',
    name: 'Ayoung',
  },
  {
    id: 'beyond',
    name: 'Beyond',
  },
  {
    id: 'ngairo',
    name: 'Ngairo',
  },
  {
    id: 'dave',
    name: 'Dave',
  },
]

export default function SeatingPlan() {
  const [names, setNames] = useState(guestNames)

  function handleOnDragEnd(result) {
    const items = Array.from(names)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setNames(items)
  }
  return (
    <>
      <h1>Guests Names</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="guestNames">
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
