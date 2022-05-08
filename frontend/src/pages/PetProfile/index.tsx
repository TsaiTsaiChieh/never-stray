import {Fragment} from 'react'
import {useParams} from 'react-router-dom'

import DogWalking from '../../components/DogWalking'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Mask from '../../components/Mask'
import ShouldLoginWarning from '../../components/ShouldLoginWarning'
import {useGetPetByIdQuery} from '../../services/api'
import {useAppSelector} from '../../store/hooks'
import ContactUs from './ContactUs'
import Details from './Details'
import Gallery from './Gallery'

const PetProfile = () => {
  const {id} = useParams()
  const {data, isLoading, isSuccess} = useGetPetByIdQuery(id!)
  const {contactUsIsShow} = useAppSelector((state) => state.ui)

  return isLoading ? (
    <DogWalking />
  ) : (
    <>
      <Mask />
      <Header />
      <ShouldLoginWarning featureName='加入我的小窩' />
      <div id='PetProfile'>
        {isSuccess &&
          data &&
          [data].map((ele) => (
            <Fragment key={id}>
              <ContactUs pet={ele} isShow={contactUsIsShow} />
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
