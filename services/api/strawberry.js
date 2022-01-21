import axios from 'axios'
import { API_URL } from '../constants'

export function quickAddLog(rawLog) {
  const { category, description, date, startTime, endTime } = rawLog
  const dateObj = new Date(date)
  const sTime = startTime.split(':')
  const eTime = endTime.split(':')

  const log = {
    id: localStorage.getItem('strawberry_course_siasisten'),
    category: category,
    desc: description,
    day: dateObj.getDate().toString(),
    month: (dateObj.getMonth() + 1).toString(),
    start_hour: sTime[0],
    start_min: sTime[1],
    end_hour: eTime[0],
    end_min: eTime[1],
  }
  return axios.post(`${API_URL}/strawberry/quicklog/`, log)
}

export function fetchMonthlyLogs(month, year) {
  return axios.get(`${API_URL}/strawberry/logs/${year}/${month}`)
}

export function fetchMonthlyEarnings(month, year) {
  return axios.get(`${API_URL}/strawberry/earnings/${year}/${month}`)
}

export function fetchYearlyEarnings(year) {
  return axios.get(`${API_URL}/strawberry/earnings/${year}`)
}

export function fetchAllListings() {
  return axios.get(`${API_URL}/strawberry/listings/`)
}

export function resetActivePeriod() {
  return axios.get(`${API_URL}/strawberry/listings/bulk_set_listing_inactive/`)
}

export function scrapeListings() {
  return axios.get(`${API_URL}/strawberry/get-listings`)
}

export function scrapeOlderLogs() {
  return axios.get(`${API_URL}/strawberry/get-old-logs`)
}

export function scrapeLogs() {
  const courseId = localStorage.getItem('strawberry_course_siasisten')
  return axios.get(`${API_URL}/strawberry/get-logs/${courseId}`)
}

export function setPayday(id, payload) {
  return axios.patch(`${API_URL}/strawberry/report/${id}/`, payload)
}

export async function scrapeAndFetch() {
  var preferred_order = ['diterima', 'direkomendasikan', 'melamar', '-------']
  await scrapeListings()
  const { data: listings } = await fetchAllListings()
  listings
    .sort((a, b) => (a.state < b.state ? 1 : -1))
    .sort((a, b) =>
      preferred_order.indexOf(a.status) > preferred_order.indexOf(b.status)
        ? 1
        : -1
    )
  console.log(listings)
  return listings
}
