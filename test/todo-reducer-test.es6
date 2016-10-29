import expect from 'expect'
import freeze from 'deep-freeze'
import todo from '../src/todo-reducer.es6'

describe('todo-reducer', () => {

  it('should return current state', () => {
    const state = {
      id:   1234,
      text: 'Hoge',
      completed: true
    }
    const action = {
      type: 'HOGE?'
    }

    freeze(state)
    freeze(action)

    expect(todo(state, action))
      .toEqual(state)
  })

  it('should return a new state for ADD_TODO', () => {
    const action = {
      type: 'ADD_TODO',
      id:   1234,
      text: 'Hoge'
    }
    const stateAfter = {
      id:   1234,
      text: 'Hoge',
      completed: false
    }

    freeze(action)

    expect(todo(undefined, action))
      .toEqual(stateAfter)
  })

  it('should toggle state "completed"', () => {
    const stateBefore = {
      id:   1234,
      text: 'Hoge',
      completed: false
    }
    const action = {
      type: 'TOGGLE_TODO'
    }
    const stateAfter = {
      id:   1234,
      text: 'Hoge',
      completed: true
    }

    freeze(action)
    freeze(stateBefore)

    expect(todo(stateBefore, action))
      .toEqual(stateAfter)
  })
})
