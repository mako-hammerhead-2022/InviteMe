import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'

// import { fetchGuests } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

// const itemsFromBackend = [
//   { id: uuidv4(), content: 'ayoung' },
//   { id: uuidv4(), content: 'beyond' },
//   { id: uuidv4(), content: 'ngairo' },
//   { id: uuidv4(), content: 'angela' },
//   { id: uuidv4(), content: 'dave' },
// ]

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return
  const { source, destination } = result

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId]
    const destColumn = columns[destination.droppableId]
    const sourceItems = [...sourceColumn.items]
    const destItems = [...destColumn.items]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
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

function App() {
  const guests = useSelector((state) => state.guests)
  console.log(guests)
  const columnsFromBackend = {
    ['1']: {
      name: 'Guests',
      items: guests,
    },
    ['2']: {
      name: 'Table 1',
      items: [],
    },
    ['3']: {
      name: 'Table 2',
      items: [],
    },
    ['4']: {
      name: 'Table 3',
      items: [],
    },
  }

  const [columns, setColumns] = useState(columnsFromBackend)
  return (
    <div>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              // style={{
              //   display: 'flex',
              //   flexDirection: 'column',
              //   alignItems: 'center',
              // }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        // style={{
                        //   background: snapshot.isDraggingOver
                        //     ? 'lightblue'
                        //     : 'lightgrey',
                        //   padding: 4,
                        //   width: 250,
                        //   minHeight: 500,
                        // }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    // style={{
                                    //   userSelect: 'none',
                                    //   padding: 16,
                                    //   margin: '0 0 8px 0',
                                    //   minHeight: '50px',
                                    //   backgroundColor: snapshot.isDragging
                                    //     ? '#263B4A'
                                    //     : '#456C86',
                                    //   color: 'white',
                                    //   ...provided.draggableProps.style,
                                    // }}
                                  >
                                    {item.name}
                                  </div>
                                )
                              }}
                            </Draggable>
                          )
                        })}
                        {provided.placeholder}
                      </div>
                    )
                  }}
                </Droppable>
              </div>
            </div>
          )
        })}
      </DragDropContext>
    </div>
  )
}

export default App

// export default function SeatingPlan() {
//   const dispatch = useDispatch('')
//   useEffect(() => {
//     dispatch(fetchGuests())
//   }, [])

//   const [names, setNames] = useState(fakeData)

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
//         <Droppable droppableId="fakeData">
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

// Imported actions from actions
// Debug reducer
// Link up with the backend Data
// -- Need to import <Guest /> in and map through each guest name to display rather than displaying the fake data
