function post4(nums){
  let myArray = []
  for (i = nums.lastIndexOf(4)+1; i < nums.length; i++) {
  myArray.push(nums[i])}
  return myArray
}