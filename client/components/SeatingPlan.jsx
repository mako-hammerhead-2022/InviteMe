import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

// import { fetchGuests } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { updateTableGuest } from '../actions'
import { Text } from '@chakra-ui/react'

function App() {
  const dispatch = useDispatch()

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
      console.log(removed)
      console.log(destColumn)
      const table = destColumn.name.replace(/^\D+/g, '')
      console.log('this is table', table)
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
      const updatedGuestInfo = { ...removed, groupNumber: Number(table) }
      console.log('update guest info', updatedGuestInfo)
      //call in your function from index.js in actions, pass in the object of the updated guest info
      dispatch(
        updateTableGuest(updatedGuestInfo.id, updatedGuestInfo.groupNumber)
      )
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
      //write code here
    }
  }
  const guests = useSelector((state) => state.guests)

  // Reset names into original table number
  const [names, setNames] = useState('')

  const columnsFromBackend = {
    ['1']: {
      name: 'Guests',
      items: [],
    },
    ['2']: {
      name: 'Table 1',
      items: guests.filter((guest) => guest.groupNumber === 1),
    },
    ['3']: {
      name: 'Table 2',
      items: guests.filter((guest) => guest.groupNumber === 2),
    },
    ['4']: {
      name: 'Table 3',
      items: guests.filter((guest) => guest.groupNumber === 3),
    },
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log('Reset btn clicked!')
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
                              draggableId={item.id.toString()}
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
                                    <Text fontSize={'20pt'}>{item.name}</Text>
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
      <button onClick={handleClick}>Reset</button>
    </div>
  )
}

export default App
