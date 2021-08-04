import axios from "axios";
import { API_URL } from "../constants";

export function getSkeleFire() {
  return axios.get(`${API_URL}/skelefire/`);
}

export function getActiveCourses() {
  return axios.get(`${API_URL}/skelefire/courses/`);
}

export function getUnreadActivities() {
  return axios.get(`${API_URL}/skelefire/activities/`);
}

export function markAsRead(moduleID) {
  return axios.patch(`${API_URL}/skelefire/activities/${moduleID}/mark_as_read/`);
}

export function markSelectedAsRead(moduleIDs) {
  const ids = { ids: moduleIDs };
  return axios.patch(`${API_URL}/skelefire/activities/mark_selected_as_read/`, ids);
}

