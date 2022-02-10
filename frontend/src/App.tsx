/* eslint-disable require-jsdoc */
import React from 'react'
import logo from './logo.svg'
import './App.css'
import Test from './components/Test'
import axios from 'axios'

function App() {
  const {REACT_APP_API_URL} = process.env
  const getData = async () => {
    const res = await axios.get(`${REACT_APP_API_URL}/ping/api`)
    const {data} = res
    console.log(data)
  }
  getData()
  return (
    <div className="App">
      <header className="App-header">
        <Test />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
