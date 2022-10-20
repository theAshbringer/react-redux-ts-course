import axios from "axios"
import { Dispatch } from "redux"
import { UserAction, UserActions } from "../types/user"


export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActions.FETCH_USERS })
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setTimeout(() => {
        dispatch({ type: UserActions.FETCH_USERS_SUCCESS, payload: response.data })
      }, 500)
    } catch (e) {
      dispatch({
        type: UserActions.FETCH_USERS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей'
      })
    }
  }
}