function countTriple(str){
  let count = 0
  for (i = 0; i < str.length-2; i++){
    if str.charAt(i) == str.charAt(i+1) && str.charAt(i+1) == str.charAt(i+2) count++
  }
  return count
}