import * as types from "./actionType";
const initialState = {
  contacts: {},
  error: null,
  loading: false,
};

const contactReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CONTACTS_START:
    case types.CREATE_USER_START:
    case types.DELETE_USER_START:
    case types.UPDATE_USER_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case types.DELETE_USER_SUCCESS:
    case types.CREATE_USER_SUCCESS:
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case types.GET_CONTACTS_ERROR:
    case types.CREATE_USER_ERROR:
    case types.DELETE_USER_ERROR:
    case types.UPDATE_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default contactReducers;
