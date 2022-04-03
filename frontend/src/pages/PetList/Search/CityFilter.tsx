import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {getPets} from '../../../store/reducers/petListSlice'
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

  const onChange = (newValue: any) => {
    dispatch(
      getPets({
        ...filters,
        city_id: newValue.map((ele: OptionType) => parseInt(ele.value)),
        page: 1,
      }),
    )
  }
  return (
    <CityWrap>
      <CityName>縣市</CityName>
      <CitySelector
        isMulti
        classNamePrefix="Select"
        closeMenuOnSelect={false}
        options={options}
        onChange={onChange}
        placeholder="請選擇顏色"
        noOptionsMessage={() => '無'}
        menuPosition='fixed'
      />
    </CityWrap>
  )
}

export default CityFilter
