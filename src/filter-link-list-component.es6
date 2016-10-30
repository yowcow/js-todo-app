import React from 'react'
import FilterLink from './filter-link-component.es6'

const FilterLinkList = ({
  currentFilter,
  onFilterClick
}) => (
  <p>
    Show: {' '}
    <FilterLink
      filter="SHOW_ALL"
      currentFilter={currentFilter}
      onFilterClick={onFilterClick}
    >All</FilterLink>
    {' '}
    <FilterLink
      filter="SHOW_ACTIVE"
      currentFilter={currentFilter}
      onFilterClick={onFilterClick}
    >Active</FilterLink>
    {' '}
    <FilterLink
      filter="SHOW_COMPLETED"
      currentFilter={currentFilter}
      onFilterClick={onFilterClick}
    >Completed</FilterLink>
  </p>
)

export default FilterLinkList
