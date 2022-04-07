import {useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate'

import {getPets} from '../store/reducers/petListSlice'

interface Props {
  pageCount: number
  pageRangeDisplayed: number
  marginPagesDisplayed: number
  className: string
  dispatch: (value: any) => void
  state: any
  scrollTop: boolean
}
const Pagination = ({
  pageCount,
  pageRangeDisplayed,
  marginPagesDisplayed,
  className,
  dispatch,
  state,
  scrollTop,
}: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(state.filters.page)
  useEffect(() => {
    setCurrentPage(state.filters.page)
  }, [state])

  const handlePageClick = (event: {selected: number}) => {
    dispatch(getPets({...state.filters, page: event.selected + 1}))
    setCurrentPage(event.selected + 1)
    if (scrollTop) window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <ReactPaginate
      className={className}
      forcePage={currentPage - 1}
      breakLabel='⋯'
      onPageChange={handlePageClick}
      previousLabel={<img src='/images/prev-arrow.png' />}
      pageRangeDisplayed={pageRangeDisplayed}
      pageCount={pageCount}
      nextLabel={<img src='/images/next-arrow.png' />}
      activeClassName='current'
      disabledClassName='disabled'
      marginPagesDisplayed={marginPagesDisplayed}
    />
  )
}

export default Pagination
