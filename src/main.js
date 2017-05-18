import React from 'react'
import ReactDOM from 'react-dom'
import Messages from './Messages'

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(
    React.createElement(Messages),
    document.getElementById('mount')
  )
)
