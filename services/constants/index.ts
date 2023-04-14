export const API_URL = process.env.NEXT_PUBLIC_API_URL
export const ENV = process.env.NODE_ENV
export const ROOT_URL = ENV == 'production' ? '/kokoa-dashboard' : ''

export const CURRENT_MONTH = new Date().getMonth() + 1
export const CURRENT_YEAR = new Date().getFullYear()
