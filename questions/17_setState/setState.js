// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
  }
  setState(changes) {
    let newState = {...this.state}
    let changeKeys = Object.keys(changes);
    changeKeys.forEach(key => {
      if (newState[key]) {
        newState[key] = changes[key]
      }
    })
    return newState;
  }
}

module.exports = { StatefulThing };
