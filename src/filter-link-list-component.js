import React from 'react'
import FilterLink from './filter-link-component'

const FilterLinkList = ({
  store
}) => (
  <p>
    Show: {' '}
    <FilterLink
      filter="SHOW_ALL"
      store={store}
    >All</FilterLink>
    {' '}
    <FilterLink
      filter="SHOW_ACTIVE"
      store={store}
    >Active</FilterLink>
    {' '}
    <FilterLink
      filter="SHOW_COMPLETED"
      store={store}
    >Completed</FilterLink>
  </p>
)

export default FilterLinkList
