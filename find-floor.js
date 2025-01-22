/** accepts a sorted array and value x and returns floor of x in the array */

function findFloor(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        //find middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === val || (middleVal < val && (arr[middleIdx + 1] > val || middleVal === arr[arr.length - 1]))) {
            return middleVal;
        } else if (middleVal > val) {
            // if middleVal is bigger than val look to left
            rightIdx = middleIdx - 1;
        } else {
            leftIdx = middleIdx + 1;
        }
    }
    return -1;
}

module.exports = findFloor