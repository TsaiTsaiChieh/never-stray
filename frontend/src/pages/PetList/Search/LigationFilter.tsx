import {Ternary} from '../../../constants/EnumType'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {getPets} from '../../../store/reducers/petListSlice'
import {
  LigationItem,
  LigationItems,
  LigationName,
  LigationWrap,
} from '../../../styled/PetList/SearchBoard'

const ligationName = {
  T: '已結紮',
  F: '未結紮',
  U: '未知',
}
const LigationFilter = () => {
  const {filters} = useAppSelector((state) => state.petList)
  const dispatch = useAppDispatch()

  const toggleLigationOpt = (ligation: TernaryType) =>
    filters.ligation.includes(ligation) ?
      filters.ligation.filter((ele) => ele !== ligation) :
      [...filters.ligation, ligation]
  return (
    <LigationWrap>
      <LigationName>結紮</LigationName>
      <LigationItems>
        {Object.values(Ternary).map((ele) => (
          <LigationItem
            key={ele}
            className={filters.ligation.includes(ele) ? 'selected' : ''}
            onClick={() =>
              dispatch(
                getPets({
                  ...filters,
                  ligation: toggleLigationOpt(ele),
                  page: 1,
                }),
              )
            }
          >
            {ligationName[ele]}
          </LigationItem>
        ))}
      </LigationItems>
    </LigationWrap>
  )
}

export default LigationFilter
