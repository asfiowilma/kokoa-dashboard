import apiClient from './apiClient'
import handleError from '@utils/handleError'

export async function getAllSpecializations() {
  return await apiClient
    .get<BiscottiSpecialization[]>(`/biscotti/specializations/`)
    .then((res) => res.data)
    .catch((reason) => handleError(reason))
}

export async function getCoursesBySpecialization(specializationId: number) {
  return await apiClient
    .get<BiscottiCourse[]>(
      `/biscotti/courses/?specialization=${specializationId}`
    )
    .then((res) => res.data)
    .catch((reason) => handleError(reason))
}

export async function getModulesByCourse(courseId: number) {
  return apiClient
    .get<BiscottiModule[]>(`/biscotti/modules/?course=${courseId}`)
    .then((res) => res.data)
    .catch((reason) => handleError(reason))
}

export async function getTaskStats() {
  return await apiClient
    .get<TaskStats>(`/biscotti/tasks/stats`)
    .then((res) => res.data)
    .catch((reason) => handleError(reason))
}

export async function updateTask(taskId: number, is_completed: boolean) {
  return await apiClient
    .patch<BiscottiTask>(`/biscotti/tasks/${taskId}/`, {
      is_completed,
    })
    .then((res) => res.data)
    .catch((reason) => handleError(reason))
}

export async function createTask(data: BiscottiCreateTaskPayload) {
  return await apiClient
    .post<BiscottiTask>(`/biscotti/tasks/`, data)
    .then((res) => res.data)
    .catch((reason) => handleError(reason))
}
