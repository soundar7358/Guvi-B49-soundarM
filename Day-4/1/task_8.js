(function(arr, k) {
    const n = arr.length;
    k = k % n; 
  
    // Rotate the array by k times
    const rotatedArray = [...arr.slice(k), ...arr.slice(0, k)];
    console.log(rotatedArray);
  })([1, 2, 3, 4, 5,6,8], 3);
  