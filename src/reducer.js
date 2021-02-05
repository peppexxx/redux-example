export function reducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: Date.now(),
            name: action.payload.name,
            age: action.payload.age
          }
        ]
      };
    case "ADD_ANIMALS":
      return {
        ...state,
        animals: [...state.animals, ...action.payload]
      };
  }
}
