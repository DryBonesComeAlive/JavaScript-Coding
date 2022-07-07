function maxBlock(str){
  var len = str.length;
  var count = 0;
  var tmpcount = 1;
   
  if (len == 0)
    return 0;
   
  for (i = 0; i < len; i++) {
    if (i < len-1 && str.charAt(i) == str.charAt(i+1)) tmpcount++;
    else tmpcount = 1;
    if (tmpcount > count) count = tmpcount;
  }
  return count;


}