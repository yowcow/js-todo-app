import React from 'react'
import Todo from './todo-component'

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul className="list-unstyled">
    {
      todos.map(todo => {
        return (
          <li key={todo.id}>
            <Todo
              {...todo}
              onTodoClick={onTodoClick}
            />
          </li>
        )
      })
    }
  </ul>
)

export default TodoList
