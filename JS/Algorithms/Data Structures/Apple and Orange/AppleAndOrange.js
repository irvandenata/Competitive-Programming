
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let resultApple = 0;
  let resultOrange = 0;
  for(let i = 0; i < apples.length;i++){
     if(apples[i]+a >=s && apples[i]+a <=t ){
         resultApple++;
     }
  }
  
  for(let i = 0; i < oranges.length;i++){
     if(oranges[i]+b >=s && oranges[i]+b <=t ){
         resultOrange++;
     }
  }
  process.stdout.write(resultApple + '\n');
  process.stdout.write(resultOrange + '\n');

}

countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])

