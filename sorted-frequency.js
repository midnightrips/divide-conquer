/** given a sorted array and a number, count the occurrences of the number in the array */

function sortedFrequency(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let count = 0;

    while (leftIdx <= rightIdx) {
        //find middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === val) {
            // if middleVal is the val add to the count
            count++;
            if (arr[middleIdx - 1] !== val) {
                leftIdx = middleIdx + 1; //if the value before it isn't val look towards the right
            } else if (arr[middleIdx + 1] !== val) {
                rightIdx = middleIdx - 1; //if the value after it isnn't the val look towards the left
            } else if (arr[middleIdx - 2] !== val) {
                count++;
                leftIdx = middleIdx + 1;
            } else {
                leftIdx = middleIdx + 1;
            }
        } else if (middleVal > val) {
            //if the middleVal too large look at left half
            rightIdx = middleIdx - 1;
        } else if (middleVal < val) {
            // if middleVal is too small look at right half
            leftIdx = middleIdx + 1;
        }
    }
    if (count === 0) {
        return -1;
    } else {
        return count;
    }
}

module.exports = sortedFrequency