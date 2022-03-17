import { createStore } from "redux";
import {
    createContextSlice,
    createSlice,
    configureStore,
} from "@reduxjs/toolkit";

const initialState = {description:true, solution:false, discussion:false, submission:false};
const headerSlice = createSlice({
    name:"header",
    initialState: initialState,
    reducers:{
        description(state){
            state.description = true;
            state.solution = false;
            state.discussion = false;
            state.submission = false;
        },
        solution(state){
            state.description = false;
            state.solution = true;
            state.discussion = false;
            state.submission = false;
        },
        discussion(state){
            state.description = false;
            state.solution = false;
            state.discussion = true;
            state.submission = false;
        },
        submission(state){
            state.description = false;
            state.solution = false;
            state.discussion = false;
            state.submission = true;
        },
    },
});

const language_initialState = {language:'JavaScript'}
const languageSlice = createSlice({
    name:"language",
    initialState: language_initialState,
    reducers:{
        language(state,action){
            state.language = action.payload;
        },
    },
});


const store = configureStore({
    reducer:{header:headerSlice.reducer, language:languageSlice.reducer},
});

export const headerActions = headerSlice.actions;
export const languageActions = languageSlice.actions;

export default store;

