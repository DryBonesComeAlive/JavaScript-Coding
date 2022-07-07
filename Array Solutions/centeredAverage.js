function centeredAverage(nums){
  result = 0
  nums.sort(function(a, b){return a - b});
  for (i = 1; i < nums.length-1; i++) {
    result = result + nums[i]}
  return result / (nums.length-2)
  
}