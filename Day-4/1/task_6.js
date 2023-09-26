let list1=[1, 3, 5];
let list2=[2, 4, 6];
(function(arr1, arr2) {
    // To merg two sorted arrays into one sorted array
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  
    // To calculate the median
    const length = mergedArray.length;
    if (length % 2 === 0) {
      // If the length is even, return the average of the middle two elements
      const middle1 = mergedArray[length / 2 - 1];
      const middle2 = mergedArray[length / 2];
      console.log((middle1 + middle2) / 2);
    } else {
      // If the length is odd, return the middle element
      console.log(mergedArray[Math.floor(length / 2)]);
    }
  })(list1,list2);
  