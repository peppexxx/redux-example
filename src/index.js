const {store} = require('./store');
const {addTodo, deleteTodo, toggleCompleted} = require('./actions')

// Subscribe Store
const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
})

// Get state store
console.log(store.getState())  


// Dispatch(action)
store.dispatch(addTodo('My Todo 1'))



// Spediamo un azione 'TOGGLE_COMPLETED' al 'reducer'
store.dispatch(toggleCompleted(1))


// Unsubscribe Store
unsubscribe();  


// Dispatch(action)
store.dispatch(deleteTodo(1))


console.log(store.getState())   

