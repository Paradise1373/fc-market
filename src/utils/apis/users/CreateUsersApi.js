import apiClient from '../../../constants/axios.interceptor'

export const CreateUsersApi = async (data) => {
  try {
    return await apiClient.post('/users', data)
  } catch (err) {
    return err
  }
}
