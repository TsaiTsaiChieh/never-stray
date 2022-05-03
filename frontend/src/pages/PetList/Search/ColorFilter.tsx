import {useState, useEffect} from 'react'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {updateFilters} from '../../../store/reducers/petListSlice'
import {
  ColorName,
  ColorSelector,
  ColorWrap,
} from '../../../styled/PetList/SearchBoard'

const ColorFilter = () => {
  const [selected, setSelected] = useState([])
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

  useEffect(() => {
    if (!filters.color.length) {
      setSelected([])
    }
  }, [filters.color])

  const onChange = (newValue: any) => {
    const expandFilters = {
      ...filters,
      color: newValue.map((ele: OptionType) => ele.value),
      page: 1,
    }
    dispatch(updateFilters(expandFilters))
    setSelected(newValue)
  }

  return (
    <ColorWrap>
      <ColorName>顏色</ColorName>
      <ColorSelector
        isMulti
        value={selected}
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
