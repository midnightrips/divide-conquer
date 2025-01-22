/** Given an array of 1s and 0s which has all 1s followed by all 0s, returns number of 0s in the array */
function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        //find middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (arr[0] === 0) {
            return arr.length;
        } else if (middleVal === 1) {
            //if middleVal is 1 look towards the right half of the array
            leftIdx = middleIdx + 1;
        } else if (middleVal === 0 && arr[middleIdx - 1] === 1) {
            //if the middleVal is 0 and the value to its left is 1 count the number of 0s
            const newArr = arr.slice(middleIdx);
            return newArr.length;
        } else {
            // if middle value is 0 and the one before it is 0 look to the left half to find the first appearance of a 0
            rightIdx = middleIdx - 1;
        }
    }

    return 0;
}

module.exports = countZeroes