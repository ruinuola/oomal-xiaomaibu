import { get } from '../get'

export function get_month_detail() {
    const result = get('/api/month_detail')
    return result
}