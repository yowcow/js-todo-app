require('./app.css')

global.jQuery = require('jquery')
require('bootstrap')

import React from 'react'
import ReactDOM from 'react-dom'
import todoStore from './todo-store.es6'
import TodoApp from './todo-app-component.es6'

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    default:
      return todos
  }
}

const render = () => {
  const {
    todos,
    visibilityFilter
  } = todoStore.getState()

  ReactDOM.render(
    <TodoApp
      store={todoStore}
      todos={getVisibleTodos(todos, visibilityFilter)}
      visibilityFilter={visibilityFilter}
    />,
    document.getElementById('app')
  )
}

todoStore.subscribe(render)
todoStore.subscribe(() => console.log(todoStore.getState()))

render()
