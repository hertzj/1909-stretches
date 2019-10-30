// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

// really struggled with this one
const floydsTriangle = n => {
    // const nums = '1234567890'.split('');
    let triangle = '';

    // for (let i = 0; i < n; i++) {
    //     let row = '';
    //     for (let j = i + 1; j < i + 2; j++) {
    //         let x = j;
    //         if (x > 9) {
    //             x = j % 10;
    //         }
    //         let num = nums[x]
    //         row += num
    //     }
    //     triangle += row
        
    // }



    return triangle

};

// FSA solution
const floydsTriangleFSA = n => {
    const triangle = [];
    let curNum = 1;
    for (let i = 0; i < n; i++) {
        const curRow = [];
        for(let j = 0; j <= i ; j++) {
            curRow.push(curNum);
            curNum++
        }
        triangle.push(curRow.join(''))
    }

    return triangle.join('\n');

};


module.exports = { floydsTriangle };
