import {
    takeLatest,
    put,
    fork,
    all,
  } from "redux-saga/effects";
  import {
    getContactsSuccess,
    getContactsError,
    createUserSuccess,
    createUserError,
    deleteUserError,
    updateUserError,
    deleteUserSuccess,
    updateUserSuccess,
  } from "./actions";
  import fireDb from "../firebase"
  import * as types from "./actionType";
  
  export function* onLoadContactStartAsync() {
    try {
      const response = yield new Promise((resolve) => 
        fireDb.child("contacts").on("value", resolve)
      );
      if (response.val() !== null) {
        yield put(getContactsSuccess(response.val()));
      } else {
        yield put(getContactsSuccess({}))
      }
    } catch (error) {
      yield put(getContactsError(error));
    }
  }

  function* onCreateUserStartAsync({ payload: user }) {
    try {
      yield fireDb.child("contacts").push(user);
      yield put(createUserSuccess())
    } catch (error) {
      yield put(createUserError(error));
    }
  }

  function* onUpdateStartAsync({ payload: { id, formValue } }) {
    try {
      yield fireDb.child(`contacts/${id}`).set(formValue);
      yield put(updateUserSuccess)
    } catch (error) {
      yield put(updateUserError(error));
    }
  }
  
  function* onDeleteUserAsync({ payload: id}) {
    try {
      yield fireDb.child(`contacts/${id}`).remove();
      yield put(deleteUserSuccess());
    } catch (error) {
      yield put(deleteUserError(error));
    }
  }
  
  export function* onLoadContact() {
    yield takeLatest(types.GET_CONTACTS_START, onLoadContactStartAsync);
  }

  export function* onCreateUser() {
    yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
  }

  export function* onUpdateUser() {
    yield takeLatest(types.UPDATE_USER_START, onUpdateStartAsync);
  }

  export function* onDeleteUser() {
    yield takeLatest(types.DELETE_USER_START, onDeleteUserAsync);
  }
  
  const Contactsagas = [
    fork(onLoadContact),
    fork(onCreateUser),
    fork(onUpdateUser),
    fork(onDeleteUser),

  ];
  
  export default function* rootSaga() {
    yield all([...Contactsagas]);
  }
  