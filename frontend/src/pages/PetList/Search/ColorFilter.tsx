import makeAnimated from 'react-select/animated'

import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {getPets} from '../../../store/reducers/petListSlice'
import {
  ColorName,
  ColorSelector,
  ColorWrap,
} from '../../../styled/PetList/SearchBoard'

const ColorFilter = () => {
  const {filters} = useAppSelector((state) => state.petList)
  const {colors} = useAppSelector((state) => state.enum)
  const dispatch = useAppDispatch()
  const animatedComponents = makeAnimated()
  const options: OptionType[] = colors.map((ele) =>
    ele ?
      {
        value: ele,
        label: ele,
      } :
      {value: '', label: '未填'},
  )

  const onChange = (newValue: any) => {
    dispatch(
      getPets({
        ...filters,
        color: newValue.map((ele: OptionType) => ele.value),
        page: 1,
      }),
    )
  }

  return (
    <ColorWrap>
      <ColorName>顏色</ColorName>
      <ColorSelector
        isMulti
        classNamePrefix='Select'
        closeMenuOnSelect={false}
        components={animatedComponents}
        options={options}
        onChange={onChange}
        placeholder='請選擇顏色'
        noOptionsMessage={() => '無'}
        isSearchable={false}
      />
    </ColorWrap>
  )
}

export default ColorFilter
