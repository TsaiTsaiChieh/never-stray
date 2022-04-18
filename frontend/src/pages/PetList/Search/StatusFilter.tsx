import {PetStatus} from '../../../constants/EnumType'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {getPets, updateFilters} from '../../../store/reducers/petListSlice'
import {Button, Items, Name, Wrap} from '../../../styled/PetList/SearchBoard'
import {petSexConverter} from '../../../utils/value-converter'

const StatusFilter = () => {
  const {filters} = useAppSelector((state) => state.petList)
  const dispatch = useAppDispatch()

  const toggleStatusOp = (status: PetStatus) =>
    filters.status.includes(status) ?
      filters.status.filter((ele) => ele !== status) :
      [...filters.status, status]

  const onClick = (status: PetStatus) => {
    const expandFilters = {...filters, status: toggleStatusOp(status), page: 1}
    dispatch(updateFilters(expandFilters))
    dispatch(getPets(expandFilters))
  }

  return (
    <Wrap>
      <Name>狀態</Name>
      <Items>
        {Object.values(PetStatus).map((status) => (
          <Button
            key={status}
            className={filters.status?.includes(status) ? 'selected' : ''}
            onClick={() => onClick(status)}
          >
            {petSexConverter(status)}
          </Button>
        ))}
      </Items>
    </Wrap>
  )
}

export default StatusFilter
