const {ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED} = require('./actionType')


const addTodo = body => ({
    type: ADD_TODO,                  
    payload: { body }
})


const deleteTodo = id => ({ 
    type: DELETE_TODO, 
    payload: { id }
})

const toggleCompleted = id => ({
    type: TOGGLE_COMPLETED, 
    payload: { id }
})


module.exports = {
    addTodo,
    deleteTodo,
    toggleCompleted
}