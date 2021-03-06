import {KeyboardEvent, useEffect, useRef} from 'react'

import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {updateFilters} from '../../../store/reducers/petListSlice'
import {
  closeKeywordSearch,
  keywordSearchOnClick,
} from '../../../store/reducers/uiSlice'
import {
  CloseKeywordSearchButton,
  KeywordSearchButton,
  SearchIcon,
  TextField,
  TextFieldGroup,
} from '../../../styled/PetList/Menu'

const KeywordSearch = () => {
  const {filters} = useAppSelector((state) => state.petList)
  const dispatch = useAppDispatch()
  const {keywordSearchTextFieldIsShow} = useAppSelector((state) => state.ui)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.value = filters.keyword ? filters.keyword : ''
    }
  }, [filters.keyword])

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return
    else {
      const expandFilters = {
        ...filters,
        keyword: e.currentTarget.value,
        page: 1,
      }
      dispatch(updateFilters(expandFilters))
    }
  }

  return (
    <TextFieldGroup isShow={keywordSearchTextFieldIsShow}>
      <TextField
        placeholder='搜尋介紹內容'
        ref={ref}
        onKeyDown={(e) => onKeyDown(e)}
      />
      <SearchIcon />
    </TextFieldGroup>
  )
}

const KeywordSearchBtn = () => {
  const {keywordSearchTextFieldIsShow, closeTextSearchIsShow} =
    useAppSelector((state) => state.ui)
  const dispatch = useAppDispatch()

  return (
    <>
      <KeywordSearchButton
        isShow={!keywordSearchTextFieldIsShow}
        onClick={() => dispatch(keywordSearchOnClick())}
      />
      <CloseKeywordSearchButton
        isShow={closeTextSearchIsShow}
        onClick={() => dispatch(closeKeywordSearch())}
      />
    </>
  )
}
export {KeywordSearch, KeywordSearchBtn}
