import { get } from '../get'

export function getYetActive() {
    const result = get('/api/yetActive')
    return result
}