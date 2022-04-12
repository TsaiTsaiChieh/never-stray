import {FormEvent} from 'react'

import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {getPets} from '../../../store/reducers/petListSlice'
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

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    dispatch(getPets({...filters, keyword: e.currentTarget.value, page: 1}))
  }

  return (
    <TextFieldGroup isShow={keywordSearchTextFieldIsShow}>
      <TextField placeholder='搜尋介紹內容' onChange={(e) => onChange(e)} />
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
