import { get } from '../get'

export function getProDetail() {
    const result = get('/api/proDetail')
    return result
}
