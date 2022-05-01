import {useEffect, useState} from 'react'
import {Route, Routes} from 'react-router-dom'

import DogWalking from './components/DogWalking'
import PetList from './pages/PetList'
import PetProfile from './pages/PetProfile'
import PrivacyPolicy from './pages/PrivacyPolicy'

const App = () => {
  /** Loading page */
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let intervalID: number
    if (loading) {
      intervalID = window.setInterval(() => setLoading(false), 500)
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
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
    )
  )
}

export default App
