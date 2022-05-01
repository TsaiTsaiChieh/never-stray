import {Fragment} from 'react'
import {useParams} from 'react-router-dom'

import {useGetPetByIdQuery} from '../../services/api'
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
            <Fragment key={id}>
              <Gallery images={ele.image} status={ele.status} />
              <Details pet={ele} />
            </Fragment>
          ))}
      </div>
      <Footer />
    </>
  )
}

export default PetProfile
