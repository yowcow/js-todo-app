import React from 'react'

const FilterLink = ({
  filter,
  currentFilter,
  onFilterClick,
  children
}) => filter != currentFilter ? (
  <a href="#" onClick={
    e => {
      onFilterClick(filter)
      e.preventDefault()
    }
  }>{children}</a>
) : (
  <span>{children}</span>
)

export default FilterLink
