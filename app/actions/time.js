import * as actionType from '../constants/store'

export function update(data){
    return {
        type: actionType.TIME_UPDATE,
        data
    }
}

export function add(item){
    return {
        type: actionType.TIME_ADD,
        data:item
    }
}

export function rm(item){
    return {
        type: actionType.TIME_RM,
        data:item
    }
}
