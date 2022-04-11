import {useAppDispatch, useAppSelector} from '../../../store/hooks'
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
  const {keywordSearchTextFieldIsShow} = useAppSelector((state) => state.ui)

  return (
    <TextFieldGroup id='TextFieldGroup' isShow={keywordSearchTextFieldIsShow}>
      <TextField placeholder='搜尋介紹內容' />
      <SearchIcon id='SearchIcon' />
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
