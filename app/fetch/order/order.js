import { get } from '../get'

export function getRefund() {
    const result = get('/api/waitHandleRefund')
    return result
}

export function getWaitSend() {
    const result = get('/api/waitHandleSend')
    return result
}

export function getInProcess() {
    const result = get('/api/inProcess')
    return result
}

export function getFinish() {
    const result = get('/api/finish')
    return result
}