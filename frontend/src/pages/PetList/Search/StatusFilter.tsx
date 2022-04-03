import {PetStatus} from '../../../constants/EnumType'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {getPets} from '../../../store/reducers/petListSlice'
import {Button, Items, Name, Wrap} from '../../../styled/PetList/SearchBoard'

const statusName = {
  open: '待認養',
  unknown: '未知',
  adopted: '已認養',
}
const StatusFilter = () => {
  const {filters} = useAppSelector((state) => state.petList)
  const dispatch = useAppDispatch()

  const toggleStatusOp = (status: PetStatus) =>
    filters.status.includes(status) ?
      filters.status.filter((ele) => ele !== status) :
      [...filters.status, status]
  return (
    <Wrap>
      <Name>狀態</Name>
      <Items>
        {Object.values(PetStatus).map((status) => (
          <Button
            key={status}
            className={filters.status?.includes(status) ? 'selected' : ''}
            onClick={() =>
              dispatch(
                getPets({...filters, status: toggleStatusOp(status), page: 1}),
              )
            }
          >
            {statusName[status]}
          </Button>
        ))}
      </Items>
    </Wrap>
  )
}

export default StatusFilter