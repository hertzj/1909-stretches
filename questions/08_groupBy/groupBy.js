function groupBy(arr, attr) {
    let group = {}
    
    if (typeof attr === 'string') {
        arr.forEach(element => {
            let val = element[attr]

            if (val in group) {
                group[val] = group[val].concat([element])
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
                group[val] = group[val].concat([element])
            }
            else {
                group[val] = [element]
            }
        })

        return group
    }
}

// FSA Solution

const groupByFsa = (collection, attr) => collection.reduce((groupDict, nextItem) => {
    let groupDictKey;

    if (typeof attr === 'function') {
        groupDictKey = attr(nextItem);
    }
    else groupDictKey = nextItem[attr];

    groupDict[groupDictKey] = !groupDict[groupDictKey]
    ? [nextItem]
    : groupDict[groupDictKey].concat([nextItem]);

    return groupDict
}, {})

module.exports = { groupBy };
