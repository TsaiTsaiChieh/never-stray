import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {getPets, updateFilters} from '../../../store/reducers/petListSlice'
import {
  ColorName,
  ColorSelector,
  ColorWrap,
} from '../../../styled/PetList/SearchBoard'

const ColorFilter = () => {
  const {filters} = useAppSelector((state) => state.petList)
  const {colors} = useAppSelector((state) => state.enum)
  const dispatch = useAppDispatch()
  const options: OptionType[] = colors.map((ele) =>
    ele ?
      {
        value: ele,
        label: ele,
      } :
      {value: '', label: '未填'},
  )

  const onChange = (newValue: any) => {
    const expandFilters = {
      ...filters,
      color: newValue.map((ele: OptionType) => ele.value),
      page: 1,
    }
    dispatch(updateFilters(expandFilters))
    dispatch(getPets(expandFilters))
  }

  return (
    <ColorWrap>
      <ColorName>顏色</ColorName>
      <ColorSelector
        isMulti
        classNamePrefix='Select'
        closeMenuOnSelect={false}
        options={options}
        onChange={onChange}
        placeholder='請選擇顏色'
        components={{IndicatorSeparator: () => null}}
        noOptionsMessage={() => '無'}
        isSearchable={false}
      />
    </ColorWrap>
  )
}

export default ColorFilter
