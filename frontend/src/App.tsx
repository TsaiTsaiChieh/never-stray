import {ReactElement, useEffect, useState} from 'react'

import {pingDB} from './api/PingAPI'
import DogWalking from './components/DogWalking'
import Header from './components/Header'
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
    <div className="App">
      {loading ? (
        <DogWalking />
      ) : (
        <>
          <Header />
          <PetList />
        </>
      )}
    </div>
  )
}

export default App
