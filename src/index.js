import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import './index.scss'
import './mocks';

const root = document.getElementById('root')

ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    root
)
