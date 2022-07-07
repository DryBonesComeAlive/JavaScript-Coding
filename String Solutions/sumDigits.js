function sumDigits(str){
  let count = 0
  let newDig = 0
  for (i = 0; i < str.length; i++){
  if /[0-9]/.test(str.charAt(i)) newDig = parseInt(str.charAt(i)), count = count + newDig}
  return count
  
}