/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(arrOfObj, sortKey, retKey) {
    const newArr = arrOfObj.map(obj => Object.entries(obj));
    return newArr.sort;
    // ran out of time
    
};

// FSA Solution

function sortOrderFSA(arr, sorted, key) {
    return arr
        .sort((a, b) => {
            if (a[sorted] < b[sorted]) {
                return -1 // a will be first
            }
            else if (b[sorted] < a[sorted]) {
                return 1 // b will be first
            }
            else return 0 // a and b stay in their places
            
        })
        .map(element => element[key]);
}




module.exports = { sortOrder };
