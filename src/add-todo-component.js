import React from 'react'

const AddTodo = ({
  onAddTodoSubmit
}) => {
  let input
  return (
    <form
      className="form-inline"
      action="#"
      onSubmit={e => {
        if (input.value.length) {
          onAddTodoSubmit(input.value)
          input.value = ''
        }
        e.preventDefault()
      }}
    >
      <div className="form-group">
        <label
          className="sr-only"
          htmlFor="input-text"
        >A todo</label>
        <input
          className="form-control"
          type="text"
          placeholder="A todo"
          ref={node => input = node}
        />
      </div>
      <button
        type="submit"
        className="btn btn-default"
      >Add Todo</button>
    </form>
  )
}

export default AddTodo
