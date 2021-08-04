import axios from "axios";
import { API_URL } from "../constants";

function getSkeleFire() {
  return axios.get(`${API_URL}/skelefire/`);
}

function getActiveCourses() {
  return axios.get(`${API_URL}/skelefire/courses/`);
}

function getUnreadActivities() {
  return axios.get(`${API_URL}/skelefire/activities/`);
}

function markAsRead(moduleID) {
  return axios.patch(`${API_URL}/skelefire/activities/${moduleID}/mark_as_read/`);
}

function markSelectedAsRead(moduleIDs) {
  const ids = { ids: moduleIDs };
  return axios.patch(`${API_URL}/skelefire/activities/mark_selected_as_read/`, ids);
}

