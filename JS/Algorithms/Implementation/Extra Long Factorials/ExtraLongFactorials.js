function proccessCount(m){
  if(m>1)
      return m * proccessCount((m-BigInt(1)))
  else
      return m;
}
function extraLongFactorials(n) {
  var result = proccessCount(BigInt(n));
  console.log(result.toString().replace('n','0')) 
}

extraLongFactorials(25)