import { useState, useReducer } from "./classes";
import { ADD_USER, ADD_ANIMALS } from "./actions";
import { reducer } from "./reducer";
import './style.css';



const appDiv = document.getElementById("app");
appDiv.innerHTML = `<div class="content"><span class="icon iconify" data-icon="emojione-monotone:airplane-arrival" data-inline="false"></span></div>`;


window.useState = useState;
window.useReducer = useReducer;


const users = new useState([1,2,3]);
console.info('STATE (users):', users.state);

users.setState((prevState) => {
    return [
        ...prevState,
        4,5,6,7
    ]
})
console.info('STATE AFTER "setState" (users):', users.state);



const store = new useReducer({ users: [], posts: [], animals: [] }, reducer);
console.log("STORE: ", store.stateStore.state);


store.dispatch(ADD_USER);
console.log("STORE AFTER DISPATCH 1: ", store.stateStore.state);


store.dispatch(ADD_ANIMALS);
console.log("STORE AFTER DISPATCH 2: ", store.stateStore.state);
