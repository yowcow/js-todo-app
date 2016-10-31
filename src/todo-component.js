import React from 'react'

const Todo = ({
  id,
  text,
  completed,
  onTodoClick
}) => (
  <a href="#"
    style={{
      textDecoration: completed
        ? 'line-through'
        : 'none'
    }}
    onClick={(e) => {
      e.preventDefault()
      onTodoClick(id)
    }}
  >{text}</a>
)

export default Todo
