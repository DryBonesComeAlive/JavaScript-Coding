function equalIsNot(str){
  let countIs = 0
  let countNot = 0
  for (i = 0; i < str.length; i++){
    if str.substring(i, i+3) == "not" countNot++
    if str.substring(i, i+2) == "is" countIs++
}
  if countIs == countNot return true
  if countIs != countNot return false
  
}