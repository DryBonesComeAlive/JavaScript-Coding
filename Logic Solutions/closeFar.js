function closeFar(a, b, c){
  if Math.abs(b - a) <= 1 && Math.abs(a - c) >= 2 && Math.abs(b - c) >= 2 return true
  if Math.abs(c - a) <= 1 && Math.abs(a - b) >= 2 && Math.abs(b - c) >= 2 return true
  else return false
}