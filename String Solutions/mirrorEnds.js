function mirrorEnds(string){
  let result = "";
  let i = 0;
  while (string.charAt(i) == string.charAt(string.length-i-1) && i < string.length){
    result = result + string.charAt(i);
    i++};
  return result;
  
}