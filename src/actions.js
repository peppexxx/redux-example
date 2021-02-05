export const ADD_USER = () => {
  return {
    type: "ADD_USER",
    payload: {
      name: "Giuseppe",
      email: "gius.cuscina@gmail.com",
      age: 25
    }
  };
};

export const ADD_ANIMALS = () => {
  return {
    type: "ADD_ANIMALS",
    payload: ["Mucca", "Pecora", "Gallina", "Elefante"]
  };
};
