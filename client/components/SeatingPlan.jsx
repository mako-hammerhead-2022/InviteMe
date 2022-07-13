import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'

const itemsFromBackend = [
  { id: uuidv4(), content: 'First task' },
  { id: uuidv4(), content: 'Second task' },
  { id: uuidv4(), content: 'Third task' },
  { id: uuidv4(), content: 'Fourth task' },
  { id: uuidv4(), content: 'Fifth task' },
]

const columnsFromBackend = {
  [uuidv4()]: {
    name: 'Guests',
    items: itemsFromBackend,
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

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return
  const { source, destination } = result

  if (sources.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId]
    const destColumn = columns[destination.droppableId]
    const sourceItems = [...sourceColumn.items]
    const destItems = [...destColumn.items]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.dropppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    })
  } else {
    const column = columns[source.droppableId]
    const copiedItems = [...column.items]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    })
  }
}

// const guestNames = [
//   {
//     id: 'angela',
//     name: 'Angela',
//   },
//   {
//     id: 'ayoung',
//     name: 'Ayoung',
//   },
//   {
//     id: 'beyond',
//     name: 'Beyond',
//   },
//   {
//     id: 'ngairo',
//     name: 'Ngairo',
//   },
//   {
//     id: 'dave',
//     name: 'Dave',
//   },
// ]

// export default function SeatingPlan() {
//   const [names, setNames] = useState(guestNames)

//   function handleOnDragEnd(result) {
//     if (!result.destination) return
//     const items = Array.from(names)
//     const [reorderedItem] = items.splice(result.source.index, 1)
//     items.splice(result.destination.index, 0, reorderedItem)

//     setNames(items)
//   }
//   return (
//     <>
//       <h1>Guests Names</h1>
//       <DragDropContext onDragEnd={handleOnDragEnd}>
//         <Droppable droppableId="guestNames">
//           {(provided) => (
//             <ul
//               className="names"
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//             >
//               {names.map(({ id, name }, index) => {
//                 return (
//                   <Draggable key={id} draggableId={id} index={index}>
//                     {(provided) => (
//                       <li
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         ref={provided.innerRef}
//                       >
//                         <p>{name}</p>
//                       </li>
//                     )}
//                   </Draggable>
//                 )
//               })}
//               {provided.placeholder}
//             </ul>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </>
//   )
// }
