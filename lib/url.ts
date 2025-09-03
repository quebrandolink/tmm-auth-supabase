export function getHashParams() {
    if (typeof window === 'undefined') return new URLSearchParams()
    const hash = window.location.hash || ''
    const str = hash.startsWith('#') ? hash.slice(1) : hash
    return new URLSearchParams(str)
}


export function getQueryParams() {
    if (typeof window === 'undefined') return new URLSearchParams()
    return new URLSearchParams(window.location.search)
}