enum UserActions {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUsersAction {
  type: UserActions.FETCH_USERS;
}

interface FetchUsersSuccessAction {
  type: UserActions.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUsersErrorAction {
  type: UserActions.FETCH_USERS_ERROR;
  payload: string;
}

type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction

interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export { UserActions, type UserAction, type UserState }