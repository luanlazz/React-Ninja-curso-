'use strict'

import { SHOW_ALL, SET_VISIBILITY_FILTER } from './actions'
import createReducer from '../create-reducer'

export const initialState = SHOW_ALL

const VisibilityFilter = createReducer(initialState, {
  [SET_VISIBILITY_FILTER]: (state, action) => action.payload.filter
})

export default VisibilityFilter
