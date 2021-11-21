import * as actionType from "./actionTypes";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

export const loadingRequest = () => {
  return {
    type: actionType.LOADING_REQUEST,
  };
};

// export const createForm = (payload) => {
//   return {
//     type: actionType.CREATE_FORMS,
//     payload,
//   };
// };

export const createFormRequestSuccess = (form) => {
  return {
    type: actionType.FORM_REQUEST_SUCCESS,
    payload: form,
  };
};

export const createSingleFormRequestSuccess = (form) => {
  return {
    type: actionType.FETCH_SINGLE_FORM,
    payload: form,
  };
};

export const requestFailuer = (error) => {
  return {
    type: actionType.REQUEST_ERROR,
    payload: error,
  };
};

export const createFormRequest = (params) => {
  return function (dispatch) {
    dispatch(loadingRequest());
    axios
      .post("/question", params)
      .then((respone) => {
        const question = respone.data;
        if (question) {
          dispatch(createFormRequestSuccess(question));
        }
      })
      .catch((error) => {
        dispatch(requestFailuer(error.response));
      });
  };
};

export const getForms = () => {
  return function (dispatch) {
    dispatch(loadingRequest());
    axios
      .get("/question?sort=createdAt&orderBy=dsc")
      .then((respone) => {
        const forms = respone.data;
        dispatch(createFormRequestSuccess(forms));
      })
      .catch((error) => {
        console.log('error', error.response)
        // dispatch(requestFailuer(error.response));
      });
  };
};

export const getForm = (id) => {
  return function (dispatch) {
    dispatch(loadingRequest());
    axios
      .get(`/question/${id}`)
      .then((respone) => {
        const form = respone.data;
        dispatch(createSingleFormRequestSuccess(form));
      })
      .catch((error) => {
        dispatch(requestFailuer(error.response));
      });
  };
};
