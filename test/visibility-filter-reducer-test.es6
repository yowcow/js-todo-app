import expect from 'expect'
import freeze from 'deep-freeze'
import visibilityFilter from '../src/visibility-filter-reducer'

describe('visibility-filter-reducer', () => {

  it('should return current state', () => {
    expect(visibilityFilter(undefined, {}))
      .toEqual('SHOW_ALL')
    expect(visibilityFilter('SHOW_SOMETHING', {}))
      .toEqual('SHOW_SOMETHING')
  })

  it('should return a new state with "SET_VISIBILITY_FILTER"', () => {
    const stateBefore = 'SHOW_ALL'
    const action = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_SOMETHING'
    }
    const stateAfter = 'SHOW_SOMETHING'

    freeze(stateBefore)
    freeze(action)

    expect(visibilityFilter(stateBefore, action))
      .toEqual(stateAfter)
  })
})
