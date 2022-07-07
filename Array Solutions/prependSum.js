function prependSum(nums){
  let newNum = nums[0] + nums[1]
  nums.shift()
  nums.shift()
  nums.unshift(newNum)
  return nums
  
}