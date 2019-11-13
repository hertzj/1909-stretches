function cache(func) {
    if (typeof func !== 'function') {
        throw new Error('Input must be a function.');
    }

    let args = [];
    let argument = arguments[0];
    return function() {
        if (args.indexOf(argument) === -1 ) {
            args.push(argument);
            return func
        }
    }

}

module.exports = { cache };
