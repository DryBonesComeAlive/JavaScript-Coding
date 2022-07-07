function countYZ(str){
  let count = 0
  let cTest = str.charAt(0)
  for (i = 0; i < str.length; i++) {
  let cTest = str.charAt(i)
  if cTest.toUpperCase() == cTest.toLowerCase() && str.charAt(i-1).toLowerCase() == "y" count++
  if cTest.toUpperCase() == cTest.toLowerCase() && str.charAt(i-1).toLowerCase() == "z" count++
  }
  if str.charAt(str.length-1).toLowerCase() == "z" || str.charAt(str.length-1).toLowerCase() == "y" count++
  return count
}