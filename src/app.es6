require('./app.css')

import React from 'react'
import ReactDOM from 'react-dom'
import todoApp from './todo-app.es6'

let nextId = 0

class TodoAdd extends React.Component {
  render() {
    return (
      <div>
        <form action="#" onSubmit={(e) => {
          const text = e.target.text.value
          if (text.length) {
            todoApp.dispatch({
              type: 'ADD_TODO',
              id: ++nextId,
              text: text
            })
            e.target.text.value = ''
          }
          e.preventDefault()
        }}>
          <input type="text" placeholder="A todo" name="text" />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

class TodoItem extends React.Component {
  render() {
    const t = this.props.item

    return (
      <a href="#"
        onClick={(e) => {
          todoApp.dispatch({
            type: 'TOGGLE_TODO',
            id: t.id
          })
          e.preventDefault()
        }}
        style={{
          textDecoration: t.completed
            ? 'line-through'
            : 'none'
        }}
        >{t.text}</a>
    )
  }
}

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo</h1>
        <TodoAdd />
        <ul>
          {
            this.props.todos.map(t => {
              return (
                <li key={t.id}>
                  <TodoItem item={t} />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const render = () => {
  const state = todoApp.getState()
  ReactDOM.render(
    <TodoApp
      todos={state.todos}
      visibilityFilter={state.visibilityFilter}
    />,
    document.getElementById('app')
  )
}

todoApp.subscribe(render)
todoApp.subscribe(() => console.log(todoApp.getState()))

render()
