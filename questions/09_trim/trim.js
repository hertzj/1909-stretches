const trim = obj => {
    const trimmed = {};

    for (const k in obj) {
        if (obj[k] !== undefined && obj[k] !== null) {
            trimmed[k] = obj[k]
        }
    }

    return trimmed;
};

module.exports = { trim };
