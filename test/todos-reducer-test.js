import expect from 'expect'
import freeze from 'deep-freeze'
import todos from '../src/todos-reducer'

describe('todos-reducer', () => {

  it('should return current state', () => {
    const state = [
      { hoge: 'fuga' }
    ]
    const action = {
      type: 'SOMETHING'
    }

    freeze(state)
    freeze(action)

    expect(todos(state, action))
      .toEqual(state)
  })

  it('should add a todo with "ADD_TODO"', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'Hoge',
        completed: false
      }
    ]
    const action = {
      type: 'ADD_TODO',
      id:   1,
      text: 'Fuga'
    }
    const stateAfter = [
      {
        id: 0,
        text: 'Hoge',
        completed: false
      },
      {
        id: 1,
        text: 'Fuga',
        completed: false
      }
    ]

    freeze(stateBefore)
    freeze(action)

    expect(todos(stateBefore, action))
      .toEqual(stateAfter)
  })

  it('should toggle a todo "completed" with "TOGGLE_TODO"', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'Hoge',
        completed: false
      },
      {
        id: 1,
        text: 'Fuga',
        completed: false
      }
    ]
    const action = {
      type: 'TOGGLE_TODO',
      id:   1
    }
    const stateAfter = [
      {
        id: 0,
        text: 'Hoge',
        completed: false
      },
      {
        id: 1,
        text: 'Fuga',
        completed: true
      }
    ]

    freeze(stateBefore)
    freeze(action)

    expect(todos(stateBefore, action))
      .toEqual(stateAfter)
  })

  it('should a todo with "REMOVE_TODO"', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'Hoge',
        completed: false
      },
      {
        id: 1,
        text: 'Fuga',
        completed: false
      }
    ]
    const action = {
      type: 'REMOVE_TODO',
      id:   1
    }
    const stateAfter = [
      {
        id: 0,
        text: 'Hoge',
        completed: false
      }
    ]

    freeze(stateBefore)
    freeze(action)

    expect(todos(stateBefore, action))
      .toEqual(stateAfter)
  })
})
