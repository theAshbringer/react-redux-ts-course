enum TodoActions {
  FETCH_TODOS = "FETCH_USERS",
  FETCH_TODOS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_USERS_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE",
}

interface FetchTodosAction {
  type: TodoActions.FETCH_TODOS;
}

interface FetchTodosSuccessAction {
  type: TodoActions.FETCH_TODOS_SUCCESS;
  payload: any[];
}

interface FetchTodosErrorAction {
  type: TodoActions.FETCH_TODOS_ERROR;
  payload: string;
}

interface SetTodoPageAction {
  type: TodoActions.SET_TODO_PAGE;
  payload: number;
}

type TodoAction = FetchTodosAction |
  FetchTodosSuccessAction |
  FetchTodosErrorAction |
  SetTodoPageAction

interface TodoState {
  todos: any[];
  page: number;
  limit: number,
  loading: boolean;
  error: null | string;
}

export { TodoActions, type TodoAction, type TodoState }