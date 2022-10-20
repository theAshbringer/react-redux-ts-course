import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';
import { TodoAction, TodoActions } from "../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActions.FETCH_TODOS });
      const response: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          _limit: limit,
          _page: page,
        }
      });
      dispatch({
        type: TodoActions.FETCH_TODOS_SUCCESS,
        payload: response.data
      });
    } catch (e) {
      dispatch({
        type: TodoActions.FETCH_TODOS_ERROR,
        payload: 'Произошла ошибка при загрузке списка дел'
      });
    }
  }
}

export const setTodoPage = (page: number): TodoAction => {
  return { type: TodoActions.SET_TODO_PAGE, payload: page }
}