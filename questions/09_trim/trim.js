// const trim = obj => {
//     const trimmed = {};

//     for (const k in obj) {
//         if (obj[k] !== undefined && obj[k] !== null) {
//             trimmed[k] = obj[k]
//         }
//     }

//     return trimmed;
// };

const trim = obj => {
    const keys = Object.keys(obj);

    return keys.reduce((trimmed, current) => {
        if (obj[current] !== undefined && obj[current] !== null) {
            trimmed[current] = obj[current]
        }
        return trimmed
    }, {})
};

module.exports = { trim };
