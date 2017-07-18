import * as actionTypes from '../constants/time'

const initialState = []

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data
        case actionTypes.TIME_ADD:
            state.unshift(action.data)
            return state
        case actionTypes.TIME_RM:
            // filter：过滤掉满足条件的
            return state.filter(item => {
                if (item.id !== action.data.id) {
                    return item
                }
            })
        default:
            return state
    }
}