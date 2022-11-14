import { snackBarAlert } from "../../../components/snackbar/redux/alert.action";
import { AxiosAuthInstance } from "../../../config/api/auth.axios";
import { store } from "../../../config/redux/store";
import UserTypes from "./user.types";

export const userGetAction = (searchQuery: { take?: any, page?: any, searchTerm?: any }) => async (dispatch: any) => {
  dispatch({
    type: UserTypes.USER_ACTION_START,
  });
  await AxiosAuthInstance.get((`/users?page=${searchQuery?.page || ''}&search_term=${searchQuery?.searchTerm || ''}&take=${searchQuery?.take || ''}`)).then(
    (res: any) => {
      dispatch({
        type: UserTypes.USER_GET_SUCCESS,
        payload: res?.data,
      });
      dispatch({
        type: UserTypes.USER_ACTION_END,
      });
    },
    (error: any) => {
      dispatch({
        type: UserTypes.USER_GET_FAILED,
        payload: error,
      });
      dispatch({
        type: UserTypes.USER_ACTION_END,
      });
    }
  );
};

export const userCreateAction = (formData: any) => async (
  dispatch: any
) => {
  dispatch({
    type: UserTypes.USER_ACTION_START,
  });
  await AxiosAuthInstance.post("/user/create", formData).then(
    (res: any) => {
      dispatch({
        type: UserTypes.USER_CREATE_SUCCESS,
        payload: res?.data,
      });
      dispatch({
        type: UserTypes.USER_ACTION_END,
      });
      //! bad solution start
      localStorage.removeItem("error");
      //! bad solution end
      store.dispatch(
        snackBarAlert(
          res?.data?.message,
          "success",
          UserTypes.USER_CREATE_SUCCESS
        )
      );
    },
    (error: any) => {
      dispatch({
        type: UserTypes.USER_CREATE_FAILED,
        payload: true,
      });
      dispatch({
        type: UserTypes.USER_ACTION_END,
      });
      //! bad solution start
      localStorage.setItem("error", error);
      //! bad solution end
      store.dispatch(
        snackBarAlert(
          error?.response?.data?.error,
          "danger",
          UserTypes.USER_CREATE_FAILED
        )
      );
    }
  );
};

export const userGetByIdAction = (id: any) => async (dispatch: any) => {
  dispatch({
    type: UserTypes.USER_ACTION_START,
  });
  await AxiosAuthInstance.get(`/user/${id}`).then(
    (res: any) => {
      dispatch({
        type: UserTypes.USER_GET_BY_ID_SUCCESS,
        payload: res?.data,
      });
      dispatch({
        type: UserTypes.USER_ACTION_END,
      });
    },
    (error: any) => {
      dispatch({
        type: UserTypes.USER_GET_BY_ID_FAILED,
        payload: error,
      });
      dispatch({
        type: UserTypes.USER_ACTION_END,
      });
    }
  );
};

export const userUpdateAction = (id: any, formData: any) => async (
  dispatch: any
) => {
  dispatch({
    type: UserTypes.USER_ACTION_START,
  });
  await AxiosAuthInstance.post(`/user/${id}`, formData).then(
    (res: any) => {
      dispatch({
        type: UserTypes.USER_UPDATE_SUCCESS,
        payload: res?.data,
      });
      dispatch({
        type: UserTypes.USER_ACTION_END,
      });

      //! bad solution start
      localStorage.removeItem("error");
      //! bad solution end

      store.dispatch(
        snackBarAlert(
          res?.data?.message,
          "success",
          UserTypes.USER_UPDATE_SUCCESS
        )
      );
    },
    (error: any) => {
      dispatch({
        type: UserTypes.USER_UPDATE_FAILED,
        payload: true,
      });
      dispatch({
        type: UserTypes.USER_ACTION_END,
      });

      //! bad solution start
      localStorage.setItem("error", error);
      //! bad solution end

      store.dispatch(
        snackBarAlert(
          error?.response?.data?.error,
          "danger",
          UserTypes.USER_UPDATE_FAILED
        )
      );
    }
  );
};

export const userDeleteAction = (id: any) => async (
  dispatch: any
) => {
  dispatch({
    type: UserTypes.USER_ACTION_START,
  });
  await AxiosAuthInstance.post(`/user/delete/${id}`).then(
    (res: any) => {
      dispatch({
        type: UserTypes.USER_DELETE_SUCCESS,
        payload: res?.data,
      });
      dispatch({
        type: UserTypes.USER_ACTION_END,
      });

      //! bad solution start
      localStorage.removeItem("error");
      //! bad solution end

      store.dispatch(
        snackBarAlert(
          res?.data?.message,
          "success",
          UserTypes.USER_DELETE_SUCCESS
        )
      );
    },
    (error: any) => {
      dispatch({
        type: UserTypes.USER_DELETE_FAILED,
        payload: true,
      });
      dispatch({
        type: UserTypes.USER_ACTION_END,
      });

      //! bad solution start
      localStorage.setItem("error", error);
      //! bad solution end

      store.dispatch(
        snackBarAlert(
          error?.response?.data?.error,
          "danger",
          UserTypes.USER_DELETE_FAILED
        )
      );
    }
  );
};