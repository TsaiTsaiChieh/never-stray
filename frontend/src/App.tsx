import Test from './components/Test'
import DogWalking from './components/DogWalking'
import {useState, useEffect, ReactElement} from 'react'
import {pingDB} from './api/PingAPI'

/**
 * App
 *
 * @return {ReactElement}
 */
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
          <Test />
        </header>
      )}
    </div>
  )
}

export default App
