import * as actionType from "../actions/actionTypes";

const initialState = {
  forms: [],
  form: {},
  loading: false,
  error: {},
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CREATE_FORMS: {
      return {
        ...state,
        forms: action.payload,
      };
    }
    case actionType.LOADING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionType.FORM_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        forms: action.payload,
        error: {},
      };
    case actionType.REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        forms: [],
        error: action.payload,
      };
    case actionType.FETCH_SINGLE_FORM:
      return {
        ...state,
        loading: false,
        form: action.payload,
        error: "",
      };
    default:
      return state;
  }
};

export default formReducer;
