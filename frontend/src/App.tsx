import {ReactElement, useEffect, useState} from 'react'
import {Route, Routes} from 'react-router-dom'

import {pingDB} from './api/PingAPI'
import DogWalking from './components/DogWalking'
import PetList from './pages/PetList'

function App(): ReactElement {
  /** Loading page */
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let intervalID: number
    if (loading) {
      intervalID = window.setInterval(() => pingDB(setLoading), 1000)
    }
    return () => {
      // reset timer
      window.clearInterval(intervalID)
    }
  }, [loading])

  return (
    <div className='App'>
      {loading ? (
        <DogWalking />
      ) : (
        <Routes>
          <Route path='/' element={<PetList />} />
        </Routes>
      )}
    </div>
  )
}

export default App
