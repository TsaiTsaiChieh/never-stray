import {ReactElement, useEffect, useState} from 'react'

import {searchPet} from '../../api/PetsAPI'
import Footer from '../../components/Footer'
import {PetStatus} from '../../constants/EnumType'
import Banner from './Banner'
import Menu from './Menu'
import PetProfile from './PetProfile'

export default function PetList(): ReactElement {
  const [totalPage, setTotalPage] = useState<number>(0)
  const [pets, setPets] = useState<PetDataType[]>([])
  const [filters, setFilters] = useState<SearchPetFilters>({
    status: PetStatus.OPEN,
    limit: 12,
    page: 1,
    ascend: true,
  })
  useEffect(() => {
    searchPet(setPets, setTotalPage, filters)
  }, [])
  useEffect(() => {
    searchPet(setPets, setTotalPage, filters)
  }, [filters, totalPage])

  return (
    <>
      <Menu setFilters={setFilters} filters={filters} />
      <Banner />
      <div id="PetList">
        <>
          {pets.map((ele) => (
            <PetProfile key={ele.id} pet={ele} />
          ))}
        </>
      </div>
      <Footer />
    </>
  )
}
