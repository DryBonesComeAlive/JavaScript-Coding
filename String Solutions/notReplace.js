function notReplace(str){
  result = ""
  for (i = 0; i < str.length; i++){
    if str.substring(i, i+2) == "is" && /[a-zA-Z]/.test(str.charAt(i-1)) == false && /[a-zA-Z]/.test(str.charAt(i+2)) == false {let result = result + "is not", i = i + 1}
   else result = result + str.charAt(i)}
  return result
}