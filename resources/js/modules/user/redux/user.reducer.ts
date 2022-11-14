import UserTypes from "./user.types";

const INITIAL_STATE = {
  data: "",
  error: "",
  loading: false,
};

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case UserTypes.USER_ACTION_START:
      return {
        ...state,
        loading: true,
      };
    case UserTypes.USER_GET_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: "",
      };
    case UserTypes.USER_GET_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case UserTypes.USER_CREATE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: "",
      };
    case UserTypes.USER_CREATE_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case UserTypes.USER_UPDATE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: "",
      };
    case UserTypes.USER_UPDATE_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case UserTypes.USER_GET_BY_ID_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case UserTypes.USER_GET_BY_ID_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    case UserTypes.USER_DELETE_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case UserTypes.USER_DELETE_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case UserTypes.USER_ACTION_END:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;