import makeAnimated from 'react-select/animated'

import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {getPets, updateFilters} from '../../../store/reducers/petListSlice'
import {
  CityName,
  CitySelector,
  CityWrap,
} from '../../../styled/PetList/SearchBoard'

const CityFilter = () => {
  const {filters} = useAppSelector((state) => state.petList)
  const {cities} = useAppSelector((state) => state.enum)
  const dispatch = useAppDispatch()
  const animatedComponents = makeAnimated()
  const options: OptionType[] = cities.map((ele) => ({
    value: ele.id.toString(),
    label: ele.name,
  }))

  const onChange = (newValue: any) => {
    const expandFilters = {
      ...filters,
      city_id: newValue.map((ele: OptionType) => parseInt(ele.value)),
      page: 1,
    }
    dispatch(updateFilters(expandFilters))
    dispatch(getPets(expandFilters))
  }

  return (
    <CityWrap>
      <CityName>縣市</CityName>
      <CitySelector
        isMulti
        classNamePrefix='Select'
        closeMenuOnSelect={false}
        components={animatedComponents}
        options={options}
        onChange={onChange}
        placeholder='請選擇縣市'
        noOptionsMessage={() => '無'}
        isSearchable={false}
      />
    </CityWrap>
  )
}

export default CityFilter
