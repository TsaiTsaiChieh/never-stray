import {PetRef} from '../../../constants/EnumType'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {getPets} from '../../../store/reducers/petListSlice'
import {
  RefItem,
  RefItems,
  RefName,
  RefWrap,
} from '../../../styled/PetList/SearchBoard'

const PetRefName = {
  gov: '政府收容所',
  map: '認養地圖',
}
const RefFilter = () => {
  const {filters} = useAppSelector((state) => state.petList)
  const dispatch = useAppDispatch()

  const toggleRefOpt = (ref: PetRef) =>
    filters.ref.includes(ref) ?
      filters.ref.filter((ele) => ele !== ref) :
      [...filters.ref, ref]

  return (
    <RefWrap>
      <RefName>資料來源</RefName>
      <RefItems id="RefItems">
        {Object.values(PetRef).map((ref) => (
          <RefItem
            key={ref}
            className={filters.ref.includes(ref) ? 'selected' : ''}
            onClick={() =>
              dispatch(getPets({...filters, ref: toggleRefOpt(ref), page: 1}))
            }
          >
            {PetRefName[ref]}
          </RefItem>
        ))}
      </RefItems>
    </RefWrap>
  )
}

export default RefFilter
