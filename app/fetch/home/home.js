import { get } from '../get'

export function getStoreInfo() {
    const result = get('/api/storeInfo')
    return result
}