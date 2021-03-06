import {useEffect, useState} from 'react'

import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {updateFilters} from '../../../store/reducers/petListSlice'
import {
  ColorHit, ColorName, ColorSelector, ColorWrap, QuestionIcon,
} from '../../../styled/PetList/SearchBoard'

const ColorFilter = () => {
  const {filters} = useAppSelector((state) => state.petList)
  const {colors} = useAppSelector((state) => state.enum)
  const dispatch = useAppDispatch()
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const options: OptionType[] = colors.map((ele) =>
    ele ?
      {
        value: ele,
        label: ele,
      } :
      {value: '', label: '未填'},
  )
  const [selected, setSelected] = useState(
    options.filter((ele) => filters.color.includes(ele.value)),
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
    setSelected(newValue)
    dispatch(updateFilters(expandFilters))
  }

  return (
    <ColorWrap>
      <ColorName>
        顏色
        <QuestionIcon
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
        />
        <ColorHit isShow={isHovering}>{'僅收容所提供顏色資訊'}</ColorHit>
      </ColorName>
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
