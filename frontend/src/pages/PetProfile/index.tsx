import {useParams} from 'react-router-dom'

import {useGetPetByIdQuery} from '../../api/pets'
import DogWalking from '../../components/DogWalking'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Details from './Details'
import Gallery from './Gallery'

const PetProfile = () => {
  const {id} = useParams()
  const {data, isLoading, isSuccess} = useGetPetByIdQuery(id!)

  return (
    isLoading ? <DogWalking /> : <>
      <Header />
      <div id='PetProfile'>
        {isSuccess &&
          data &&
          [data].map((ele) => (
            <>
              <Gallery images={ele.image} status={ele.status} />
              <Details pet={ele} />
            </>
          ))}
      </div>
      <Footer />
    </>
  )
}

export default PetProfile
