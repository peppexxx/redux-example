export class useState {
  constructor(initialValue) {
    this.state = initialValue || [];
  }

  setState(action) {
    if (!action) return Promise.reject("Not argument match");

    switch (typeof action) {
      case "function":
        Promise.resolve((this.state = action(this.state)));
        break;
      case "string":
      case "number":
      case "array":
        Promise.resolve((this.state = action));
        break;
      case "default":
        Promise.reject("Error");
    }
  }
}

export class useReducer {
  constructor(initialValue, reducer) {
    this.stateStore = new useState(initialValue);
    this.reducer = reducer;
  }
  dispatch(action) {
    // funzione di 'action' che riceve lo "state"
    //const dispatchValue = action(this.stateStore.state);

    const dispatchValue = action();
    const valueAction = this.reducer(this.stateStore.state, dispatchValue);

    this.stateStore.state = valueAction;
  }
}
