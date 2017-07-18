import { get } from '../get'

export function getChuShouList() {
    const result = get('/api/chuShou')
    return result
}

export function getCangKuList() {
    const result = get('/api/cangku')
    return result
}

export function getShouKongList() {
    const result = get('/api/shoukong')
    return result
}