import { get } from '../get'

export function getStoreInfo() {
    const result = get('/api/pro_ku')
    return result
}