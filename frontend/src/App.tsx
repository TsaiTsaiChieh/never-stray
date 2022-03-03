/* eslint-disable require-jsdoc */
import axios from 'axios'

import Test from './components/Test'
import DogWalking from './components/DogWalking'

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
      <DogWalking />
      <header className="App-header">
        <Test />
      </header>
    </div >
  )
}

export default App
