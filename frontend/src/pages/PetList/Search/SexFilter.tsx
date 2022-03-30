import {PetSex} from '../../../constants/EnumType'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {getPets} from '../../../store/reducers/petListSlice'
import {
  SexItem,
  SexItems,
  SexName,
  SexWrap,
} from '../../../styled/PetList/SearchBoard'

const PetSexName = {
  F: '妹妹',
  M: '弟弟',
  U: '未知',
}
const SexFilter = () => {
  const {filters} = useAppSelector((state) => state.petList)
  const dispatch = useAppDispatch()

  const toggleSexOpt = (sex: PetSex) =>
    filters.sex.includes(sex) ?
      filters.sex.filter((ele) => ele !== sex) :
      [...filters.sex, sex]
  return (
    <SexWrap>
      <SexName>性別</SexName>
      <SexItems>
        {Object.values(PetSex).map((sex) => (
          <SexItem
            key={sex}
            className={filters.sex?.includes(sex) ? 'selected' : ''}
            onClick={() =>
              dispatch(getPets({...filters, sex: toggleSexOpt(sex), page: 1}))
            }
          >
            {PetSexName[sex]}
          </SexItem>
        ))}
      </SexItems>
    </SexWrap>
  )
}

export default SexFilter
