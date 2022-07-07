function evenlySpaced(a, b, c){
  let myArray = [a, b, c]
  myArray.sort(function(a, b){return a - b})
  let diffLow = myArray[1] - myArray[0]
  let diffHigh = myArray[2] - myArray[1]
  if diffLow == diffHigh return true
  else return false

  
}