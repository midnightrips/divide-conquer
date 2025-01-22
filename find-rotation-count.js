/** accepts an array of distinct numbers sorted in increasing order
 * 
 * the array has been rotated counter-clockwise n number of times
 * 
 * finds the value of n -- the index of the smallest value is the number of rotations
 */

function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx < rightIdx) {
        //find middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal > arr[rightIdx]) {
            leftIdx = middleIdx + 1; // if middleVal is greater than the rightmost value, the smallest element is in the right
        } else {
            rightIdx = middleIdx; //compare the middle value to the previous middle value to determine which is smallest
        }

    }
    return leftIdx;
}

module.exports = findRotationCount