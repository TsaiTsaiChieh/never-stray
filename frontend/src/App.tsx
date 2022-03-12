import {ReactElement, useEffect, useState} from 'react'

import {pingDB} from './api/PingAPI'
import DogWalking from './components/DogWalking'
import Header from './components/Header'
import Menu from './components/Menu'
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
        <header className="App-header">
          <Header />
          <Menu />
          <PetList />
        </header>
      )}
    </div>
  )
}

export default App
