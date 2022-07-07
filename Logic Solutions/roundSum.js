function roundSum(a, b, c){
  return helpMe(a) + helpMe(b) + helpMe(c)
  
}
function helpMe(n) {
  let haiKa = n % 10 
  if haiKa >= 5 let n = n + (10 - haiKa)
  if haiKa < 5 let n = n - haiKa
  return n }