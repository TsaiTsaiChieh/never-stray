import {useParams} from 'react-router-dom'

const PetProfile = () => {
  const {id} = useParams()
  return (
    <div>{id}</div>
  )
}

export default PetProfile
