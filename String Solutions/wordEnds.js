function wordEnds(str, word){
  let result = ""
  for (i = 0; i < str.length; i++){
    if str.substring(i, i + word.length) == word 
    {result = result + str.substring(i-1, i) + str.substring(i+word.length, i+word.length + 1)}}
  return result
}