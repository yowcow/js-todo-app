import React from 'react'
import ReactDOM from 'react-dom'

require('./app.css')

const App = ({ message }) => {
  return (
    <h1>{ message }</h1>
  )
}

ReactDOM.render(
  <App message={'Hello world'} />,
  document.getElementById('app')
)
