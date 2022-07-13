import React from 'react'
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
  return (
    <>
      <h1>Guests Names</h1>
      <DragDropContext>
        <Droppable droppableId="guestNames">
          {(provided) => (
            <ul
              className="names"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {guestNames.map(({ id, name }, index) => {
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
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}
