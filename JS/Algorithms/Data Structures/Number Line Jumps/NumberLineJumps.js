function kangaroo(x1, v1, x2, v2) {
  if(v1 > v2 && x1 > x2 || v2 > v1 && x2 > x1 ){
      return "NO";
  }else{
      let currentX1 = x1;
      let currentX2 = x2;
      for(let i = 0; i < 10000; i++){
          currentX1 = currentX1 + v1;
          currentX2 = currentX2 + v2;
          if(currentX2 == currentX1) return "YES";
      }
      return "NO";
  }
}

console.log(kangaroo(0,3,4,2));