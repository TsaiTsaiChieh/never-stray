import {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {updateFilters} from '../../../store/reducers/petListSlice'
import {
  CityName,
  CitySelector,
  CityWrap,
} from '../../../styled/PetList/SearchBoard'

const CityFilter = () => {
  const {filters} = useAppSelector((state) => state.petList)
  const {cities} = useAppSelector((state) => state.enum)
  const dispatch = useAppDispatch()
  const options: OptionType[] = cities.map((ele) => ({
    value: ele.id.toString(),
    label: ele.name,
  }))
  const [selected, setSelected] = useState(
    options.filter((ele) => filters.city_id.includes(parseInt(ele.value))))

  useEffect(() => {
    if (!filters.city_id.length) {
      setSelected([])
    }
  }, [filters.city_id])

  const onChange = (newValue: any) => {
    const expandFilters = {
      ...filters,
      city_id: newValue.map((ele: OptionType) => parseInt(ele.value)),
      page: 1,
    }
    setSelected(newValue)
    dispatch(updateFilters(expandFilters))
  }

  return (
    <CityWrap>
      <CityName>縣市</CityName>
      <CitySelector
        isMulti
        value={selected}
        classNamePrefix='Select'
        closeMenuOnSelect={false}
        options={options}
        onChange={onChange}
        placeholder='請選擇縣市'
        components={{IndicatorSeparator: () => null}}
        noOptionsMessage={() => '無'}
        isSearchable={false}
      />
    </CityWrap>
  )
}

export default CityFilter
