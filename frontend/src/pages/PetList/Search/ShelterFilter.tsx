import makeAnimated from 'react-select/animated'

import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {getPets} from '../../../store/reducers/petListSlice'
import {
  ShelterName,
  ShelterSelector,
  ShelterWrap,
} from '../../../styled/PetList/SearchBoard'

const ShelterFilter = () => {
  const {filters} = useAppSelector((state) => state.petList)
  const {shelters} = useAppSelector((state) => state.enum)
  const dispatch = useAppDispatch()
  const animatedComponents = makeAnimated()
  const options: OptionType[] = shelters.map((ele: IDAndNameType) => ({
    value: ele.id.toString(),
    label: ele.name,
  }))

  const onChange = (newValue: any) => {
    dispatch(
      getPets({
        ...filters,
        shelter_id: newValue.map((ele: OptionType) => parseInt(ele.value)),
        page: 1,
      }),
    )
  }
  return (
    <ShelterWrap>
      <ShelterName>收容所</ShelterName>
      <ShelterSelector
        isMulti
        classNamePrefix='Select'
        closeMenuOnSelect={false}
        components={animatedComponents}
        options={options}
        onChange={onChange}
        placeholder='請選擇收容所'
        noOptionsMessage={() => '無'}
        isSearchable={false}
      />
    </ShelterWrap>
  )
}

export default ShelterFilter
