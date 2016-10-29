import expect from 'expect'
import freeze from 'deep-freeze'
import todoApp from '../src/todo-app.es6'

describe('todo-app', () => {

  it('should return current state', () => {
    const state = {
      todos: [],
      visibilityFilter: 'SHOW_ALL'
    }

    expect(todoApp.getState()).toEqual(state)
  })

  it('should add a todo', () => {
    const state = {
      todos: [
        {
          id:   1,
          text: 'Hoge',
          completed: false
        }
      ],
      visibilityFilter: 'SHOW_ALL'
    }
    const action = {
      type: 'ADD_TODO',
      id:   1,
      text: 'Hoge'
    }

    freeze(action)

    todoApp.dispatch(action)

    expect(todoApp.getState()).toEqual(state)
  })

  it('should toggle a todo "completed"', () => {
    const state = {
      todos: [
        {
          id:   1,
          text: 'Hoge',
          completed: true
        }
      ],
      visibilityFilter: 'SHOW_ALL'
    }
    const action = {
      type: 'TOGGLE_TODO',
      id:   1
    }

    freeze(action)

    todoApp.dispatch(action)

    expect(todoApp.getState()).toEqual(state)
  })

  it('should remove a todo', () => {
    const state = {
      todos: [],
      visibilityFilter: 'SHOW_ALL'
    }
    const action = {
      type: 'REMOVE_TODO',
      id:   1
    }

    freeze(action)

    todoApp.dispatch(action)

    expect(todoApp.getState()).toEqual(state)
  })

  it('should apply visibilityFilter', () => {
    const state = {
      todos: [],
      visibilityFilter: 'SHOW_HOGE'
    }
    const action = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_HOGE'
    }

    freeze(action)

    todoApp.dispatch(action)

    expect(todoApp.getState()).toEqual(state)
  })
})
