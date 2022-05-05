import {useEffect, useState} from 'react'

import {Order, OrderKey} from '../../constants/EnumType'
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import {updateFilters} from '../../store/reducers/petListSlice'
import {
  AgeOrderSelect,
  Title,
  UpdateTimeOrderSelector,
  Wrap,
} from '../../styled/PetList/OrderFilter'
import TrackingFilter from './Search/TrackingFilter'

const updateTimeOrderName = {
  ASC: '舊到新',
  DESC: '新到舊',
}
const ageOrderName = {
  ASC: '小到大',
  DESC: '大到小',
}
const OrderFilter = () => {
  const {filters} = useAppSelector((state) => state.petList)
  const {isLogin} = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const updateTimeOptions: OptionType[] = Object.values(Order).map((ele) => ({
    value: ele,
    label: updateTimeOrderName[ele],
  }))

  const ageOptions: OptionType[] = Object.values(Order).map((ele) => ({
    value: ele,
    label: ageOrderName[ele],
  }))
  const [updateTimeOrder, setUpdateTimeOrder] = useState<OptionType | null>(
    filters.order_key === OrderKey.UPDATE ?
      filters.ascend ?
        updateTimeOptions[0] :
        updateTimeOptions[1] :
      null,
  )
  const [ageOrder, setAgeOrder] = useState<OptionType | null>(
    filters.order_key === OrderKey.AGE ?
      filters.ascend ?
        ageOptions[0] :
        ageOptions[1] :
      null,
  )

  useEffect(() => {
    if (!filters.order_key) {
      setAgeOrder(null)
      setUpdateTimeOrder(null)
    }
  }, [filters.order_key])

  const onChange = (newValue: any) => {
    const isUpdateTimeSelector =
      newValue.label === updateTimeOrderName.ASC || updateTimeOrderName.DESC

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
      {isLogin ? (
        <TrackingFilter />
      ) : (
        <AgeOrderSelect
          classNamePrefix='Select'
          placeholder='年紀'
          options={ageOptions}
          components={{IndicatorSeparator: () => null}}
          value={ageOrder}
          onChange={onChange}
          isSearchable={false}
        />
      )}
    </Wrap>
  )
}

export default OrderFilter
