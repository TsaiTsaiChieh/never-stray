import ReactPaginate from 'react-paginate'

interface Props {
  pageCount: number;
  pageRangeDisplayed: number;
  marginPagesDisplayed: number;
  className: string
  setState: (value: any) => void;
  state: any;
  scrollTop: boolean;
}
const Pagination = ({
  pageCount,
  pageRangeDisplayed,
  marginPagesDisplayed,
  className,
  setState,
  state,
  scrollTop,
}: Props) => {
  const handlePageClick = (event: {selected: number}) => {
    setState({...state, page: event.selected + 1})
    if (scrollTop) window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <ReactPaginate
      className={className}
      breakLabel="⋯"
      onPageChange={handlePageClick}
      previousLabel={<img src="/images/prev-arrow.png" />}
      pageRangeDisplayed={pageRangeDisplayed}
      pageCount={pageCount}
      nextLabel={<img src="/images/next-arrow.png" />}
      activeClassName="current"
      disabledClassName="disabled"
      marginPagesDisplayed={marginPagesDisplayed}
    />
  )
}

export default Pagination
