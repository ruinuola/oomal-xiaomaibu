import { get } from '../get'

export function getYunfei() {
    const result = get('/api/yunfei')
    return result
}