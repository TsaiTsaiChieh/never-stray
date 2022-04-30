import {useState} from 'react'

import {Order, OrderKey} from '../../constants/EnumType'
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import {updateFilters} from '../../store/reducers/petListSlice'
import {
  AgeOrderSelect, Title, UpdateTimeOrderSelector, Wrap,
} from '../../styled/PetList/OrderFilter'

const updateTimeOrderName = {
  ASC: '舊到新',
  DESC: '新到舊',
}
const ageOrderName = {
  ASC: '小到大',
  DESC: '大到小',
}
const OrderFilter = () => {
  const [updateTimeOrder, setUpdateTimeOrder] = useState<OptionType | null>()
  const [ageOrder, setAgeOrder] = useState<OptionType | null>()
  const {filters} = useAppSelector((state) => state.petList)
  const dispatch = useAppDispatch()
  const updateTimeOptions: OptionType[] = Object.values(Order).map((ele) => ({
    value: ele,
    label: updateTimeOrderName[ele],
  }))
  const ageOptions: OptionType[] = Object.values(Order).map((ele) => ({
    value: ele,
    label: ageOrderName[ele],
  }))

  const onChange = (newValue: any) => {
    const isUpdateTimeSelector =
      newValue.label === updateTimeOrderName.ASC ||
      newValue.label === updateTimeOrderName.DESC

    if (isUpdateTimeSelector) {
      setUpdateTimeOrder(newValue)
      setAgeOrder(null)
    }
    if (!isUpdateTimeSelector) {
      setUpdateTimeOrder(null)
      setAgeOrder(newValue)
    }

    const expandFilters = {
      ...filters,
      order_key: isUpdateTimeSelector ? OrderKey.UPDATE : OrderKey.AGE,
      ascend: newValue.value === Order.ASC,
      page: 1,
    }
    dispatch(updateFilters(expandFilters))
  }
  return (
    <Wrap>
      <Title />
      <UpdateTimeOrderSelector
        classNamePrefix='Select'
        placeholder='更新日期'
        options={updateTimeOptions}
        components={{
          IndicatorSeparator: () => null,
        }}
        value={updateTimeOrder}
        onChange={onChange}
        isSearchable={false}
      />
      <AgeOrderSelect
        classNamePrefix='Select'
        placeholder='年紀'
        options={ageOptions}
        components={{IndicatorSeparator: () => null}}
        value={ageOrder}
        onChange={onChange}
        isSearchable={false}
      />
    </Wrap>
  )
}

export default OrderFilter
