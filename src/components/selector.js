import { createSelector } from "reselect";

const getContacts = (state) => state.data.contacts

export const getUsers = createSelector(getContacts, contacts => contacts);