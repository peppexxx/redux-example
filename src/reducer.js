const {ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO} = require('./actionType')

let lastId = 0;


function reducer(state = [], action) {
    switch(action.type) {
        case ADD_TODO: 
            return [
                ...state, 
                {id: ++lastId,body: action.payload.body, completed: false}
            ]
        case TOGGLE_COMPLETED:
            return state.map(ele => ( ele.id === action.payload.id ?
                {...ele, completed: !ele.completed} : {...ele}
            ))

        case DELETE_TODO:
            return state.filter(ele => ele.id !== action.payload.id)
        
        default:
            return state   
    }
}


module.exports = reducer;
