function groupBy(arr, attr) {
    let group = {}
    
    if (typeof attr === 'string') {
        arr.forEach(element => {
            let val = element[attr]

            if (val in group) {
                group[val] = group[val].concat(element)
            }
            else {
                group[val] = [element];
            }
        })

        return group
    }

    else if (typeof attr === 'function') {
        arr.forEach(element => {
            let val = attr(element)
            if (val in group) {
                group[val] = group[val].concat(element)
            }
            else {
                group[val] = [element]
            }
        })

        return group
    }
}

module.exports = { groupBy };
