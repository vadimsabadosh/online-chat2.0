import {createStore} from 'redux';
const UPDATE_MESSAGES = "UPDATE-MESSAGES";
const UPDATE_CURRENT_USER = "UPDATE-CURRENT-USER";
let initialState = {
    messages: [],
    currentUser: {},
};
let messageReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_MESSAGES:
            return {
                ...state,
                messages: [ ...action.messages ]
            }
        case UPDATE_CURRENT_USER:
            return {
                ...state,
                currentUser: {uid: action.uid}
            }
        default: 
            return state;  
    }
}
let store = createStore(messageReducer);

export const updateMessages = (messages) =>{
    return(
        {type: UPDATE_MESSAGES, messages}
    )
};
export const updateCurrentUser = (uid) =>{
    return(
        {type: UPDATE_CURRENT_USER, uid}
    )
};

window.store = store;
export default store;