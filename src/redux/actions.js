import * as types from "./actionType";

export const getContactsStart = () => ({
  type: types.GET_CONTACTS_START,
});

export const getContactsSuccess = (contacts) => ({
  type: types.GET_CONTACTS_SUCCESS,
  payload: contacts,
});

export const getContactsError = (error) => ({
  type: types.GET_CONTACTS_ERROR,
  payload: error,
});

export const createUserStart = (user) => ({
  type: types.CREATE_USER_START,
  payload: user,
});

export const createUserSuccess = () => ({
  type: types.CREATE_USER_SUCCESS,
});

export const createUserError = (error) => ({
  type: types.CREATE_USER_ERROR,
  payload: error,
});

export const updateUserStart = (userInfo) => ({
  type: types.UPDATE_USER_START,
  payload: userInfo,
});

export const updateUserSuccess = () => ({
  type: types.UPDATE_USER_SUCCESS,
});

export const updateUserError = (error) => ({
  type: types.UPDATE_USER_ERROR,
  payload: error,
});

export const deleteUserStart = (id) => ({
  type: types.DELETE_USER_START,
  payload: id,
});

export const deleteUserSuccess = () => ({
  type: types.DELETE_USER_SUCCESS,
});

export const deleteUserError = (error) => ({
  type: types.DELETE_USER_ERROR,
  payload: error,
});
