/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(arrOfObj, sortKey, retKey) {
    const newArr = arrOfObj.map(obj => Object.entries(obj));
    return newArr.sort;
    // ran out of time
    
};




module.exports = { sortOrder };
