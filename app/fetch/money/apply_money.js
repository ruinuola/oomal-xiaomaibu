import { get } from '../get'

export function get_apply_money() {
    const result = get('/api/apply_money')
    return result
}