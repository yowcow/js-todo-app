import React from 'react'
import AddTodo from './add-todo-component'
import TodoList from './todo-list-component'
import FilterLinkList from './filter-link-list-component'

let nextId = 0

const TodoApp = ({
  store,
  todos,
  visibilityFilter,
}) => (
  <div className="row">
    <h1>Todo</h1>
    <AddTodo onAddTodoSubmit={
      text => {
        store.dispatch({
          type: 'ADD_TODO',
          id: ++nextId,
          text: text
        })
      }
    } />
    <TodoList
      todos={todos}
      onTodoClick={
        id => store.dispatch({
          type: 'TOGGLE_TODO',
          id
        })
      }
    />
    <FilterLinkList
      currentFilter={visibilityFilter}
      onFilterClick={
        filter => {
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          })
        }
      }
    />
  </div>
)

export default TodoApp
