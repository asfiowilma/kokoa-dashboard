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
    day: dateObj.getDate(),
    month: dateObj.getMonth() + 1,
    start_hour: sTime[0],
    start_min: sTime[1],
    end_hour: eTime[0],
    end_min: eTime[1],
  }
  return axios.post(`${API_URL}/strawberrry/quicklog/`, log)
}
