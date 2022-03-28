import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

import {AppDispatch, RootState} from '../'

export const useAppDispatch: any = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
