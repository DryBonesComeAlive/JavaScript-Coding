function gHappy(str){
  let happy = true
  for (i = 0; i < str.length; i++){
    if str.charAt(i) == "g" {
      if (i > 0 && str.charAt(i-1) == "g") happy = true
      else if (i < str.length-1 && str.charAt(i+1) == "g") happy = true
      else happy = false}}
  return happy
}