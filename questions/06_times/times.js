function times(num) {
    if (typeof num !== 'number') {
        throw 'Numbers only!'
    }
    
    let priorNum = num;
    return function newFunc (newNum) {
        let result = newNum * priorNum;
        
        return result;
    }
}

module.exports = { times };
