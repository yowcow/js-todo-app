import React from 'react'

const Link = ({
  active,
  onClick,
  children
}) => !active ? (
  <a href="#" onClick={
    e => {
      onClick()
      e.preventDefault()
    }
  }>{children}</a>
) : (
  <span>{children}</span>
)

class FilterLink extends React.Component {
  componentDidMount() {
    const store = this.props.store
    this.unsubscribe = store.subscribe(
      () => this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const props = this.props
    const store = props.store
    const state = store.getState()

    return (
      <Link
        active={
          props.filter ===
            state.visibilityFilter
        }
        onClick={() =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }
      >{props.children}</Link>
    )
  }
}

export default FilterLink
