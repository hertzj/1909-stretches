function cache(func) {
    if (typeof func !== 'function') {
        throw new Error('Input must be a function.');
    }

    let args = [];
    let argument = arguments[0];
    args.push(argument);
    return function() {
        if (args.indexOf(argument) === -1 ) {
            return func
        }
    }

}

// FSA solution
function cacheFsa(cb) {
    if (typeof cb !== 'function') throw new Error ('Input must be a function.');
    
    const memo = {}

    return function cached(...n) {
        if (memo[n] !== undefined) {
            return memo[n];
        } else {
            memo[n] = cb(...n)
            return memo[n];
        }
    }
}

module.exports = { cache };
