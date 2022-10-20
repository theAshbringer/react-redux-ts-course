import { TodoAction, TodoActions, TodoState } from "../types/todo";

const initialState: TodoState = {
  todos: [],
  limit: 10,
  page: 1,
  loading: false,
  error: null,
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActions.FETCH_TODOS:
      return { ...state, loading: true };
    case TodoActions.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TodoActions.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodoActions.SET_TODO_PAGE:
      return { ...state, page: action.payload };
    default: {
      return state;
    }
  }
}