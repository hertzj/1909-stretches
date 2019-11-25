// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
    this.prevStates = []
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
    // FSA solution
    // this.prevStates.push(this.state)
    // this.state = { ...this.state, ...changes }
    // return this.state
  }
  goBack() {
    this.state = this.prevStates.pop();
  }
}

module.exports = { StatefulThing };
