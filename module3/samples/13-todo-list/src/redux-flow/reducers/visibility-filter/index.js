'use strict'

import { SHOW_ALL, SET_VISIBILITY_FILTER } from './actions'

export const initialState = SHOW_ALL

const VisibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter
  }
  return state
}

export default VisibilityFilter
