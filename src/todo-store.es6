import { createStore } from 'redux'
import { combineReducers } from 'redux'
import todos from './todos-reducer.es6'
import visibilityFilter from './visibility-filter-reducer.es6'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

//const todoApp = (state = {}, action) => {
//  return {
//    todos: todos(
//      state.todos,
//      action
//    ),
//    visibilityFilter: visibilityFilter(
//      state.visibilityFilter,
//      action
//    )
//  }
//}

module.exports = createStore(todoApp)
