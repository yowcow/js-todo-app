require('./app.css')

global.jQuery = require('jquery')
require('bootstrap')

import React from 'react'
import ReactDOM from 'react-dom'
import todoApp from './todo-app.es6'

let nextId = 0

class TodoAdd extends React.Component {
  render() {
    return (
      <div className="row">
        <form className="form-inline" action="#" onSubmit={(e) => {
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
          <div className="form-group">
            <label className="sr-only" for="input-text">A todo</label>
            <input className="form-control" type="text" placeholder="A todo" name="text" />
          </div>
          <button type="submit" className="btn btn-default">Add Todo</button>
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
        <div className="row">
          <ul className="list-unstyled">
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
