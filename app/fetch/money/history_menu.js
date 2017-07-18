import { get } from '../get'

export function history_menu() {
    const result = get('/api/history_menu')
    return result
}