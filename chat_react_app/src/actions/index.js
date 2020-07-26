import * as types from '../constants/ActionTypes';

let nextMessageId = 0;
let nextUserId = 0;

// actions alone will not change the state, we need the reducer
// So reducer will take care of creating new state when action is dispatch.

export const addMessage = (message, author) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
});


export const addUser = name => ({
    type: types.ADD_USER,
    id: nextUserId++,
    name
});

export const messageReceived = (message, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
});


export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
});