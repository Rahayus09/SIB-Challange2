function getSecondLargest(nums) {
    let arr = [...new Set(nums)];
  
    //Javascript's array member method .sort( always sorts asciibetically.
    arr = arr.sort((a, b) => { return a - b });
    let number = arr[arr.length - 2] || arr[0];
    return number
  }

  let nums=([9,4,7,7,4,3,2,2,8]);
  console.log(getSecondLargest(nums));
  console.log(getSecondLargest(0));
  console.log(getSecondLargest());