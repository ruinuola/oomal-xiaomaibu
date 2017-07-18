import { get } from '../get'

export function getSearchList() {
    const result = get('/api/search_list')
    return result
}