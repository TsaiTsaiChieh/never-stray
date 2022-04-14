import {useEffect, useState} from 'react'
import {Route, Routes} from 'react-router-dom'

import {pingDB} from './api/PingAPI'
import DogWalking from './components/DogWalking'
import PetList from './pages/PetList'
import PetProfile from './pages/PetProfile'

const App = () => {
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
    loading ? (
      <DogWalking />
    ) : (
      <Routes>
        <Route path='/' element={<PetList />} />
        <Route path='/profile/:id' element={<PetProfile />} />
      </Routes>
    )
  )
}

export default App
