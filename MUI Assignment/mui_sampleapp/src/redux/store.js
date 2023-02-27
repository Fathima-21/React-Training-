import { createStore, combineReducers } from "redux";
//Action Types
const SET_NAME="SET_NAME";
const SET_EDUCATION="SET_EDUCATION";

//Reducers
const nameReducer=(state="",action)=>{
    switch(action.type){
        case SET_NAME:
            return action.payload;
        default:
            return state;
    }

}

const educationReducer=(state=[],action,)=>{
    switch(action.type){
        case SET_EDUCATION:
            return action.payload;
        default:
            return state;
    }


}

const rootReducer=combineReducers({
    name:nameReducer,
    education:educationReducer
})

// Actions
export const setName = (name) => ({ type: SET_NAME, payload: name });

export const setEducation = (education) => ({
  type: SET_EDUCATION,
  payload: education,
});

//store
const store=createStore(rootReducer);
export default store;