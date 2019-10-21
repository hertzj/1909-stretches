const trim = obj => {
    const trimmed = {};

    for (const k in obj) {
        if (obj[k] !== undefined && obj[k] !== null) {
            trimmed[k] = obj[k]
        }
    }

    return trimmed;
};

// const trim = obj => {
//     const keys = Object.keys(obj);

//     return keys.reduce((trimmed, current) => {
//         if (obj[current] !== undefined && obj[current] !== null) {
//             trimmed[current] = obj[current]
//         }
//         return trimmed
//     }, {})
// };
// however, Object.keys loops through the entire object, so this solution will take longer as we are iterating through twice compared to once in the original solution

module.exports = { trim };
