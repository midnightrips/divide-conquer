/** accepts a rotated array of sorted numbers and an integer (e.g. [3,4,1,2], 4)
 * 
 * returns the index of the integer in the array
 * 
 * returns -1 if the value is not found
 */

function findRotatedIndex(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        //find middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === val) return middleIdx;

        if (arr[leftIdx] <= middleVal) {
            if (val >= arr[leftIdx] && val < middleVal) {
                rightIdx = middleIdx - 1;
            } else {
                leftIdx = middleIdx + 1;
            }
        } else {
            if (val <= arr[rightIdx] && val > middleVal) {
                leftIdx = middleIdx + 1;
            } else {
                rightIdx = middleIdx - 1;
            }
        }

    }

    return -1;
}

module.exports = findRotatedIndex