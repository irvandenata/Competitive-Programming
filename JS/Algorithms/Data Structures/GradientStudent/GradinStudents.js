// Url: https://www.hackerrank.com/challenges/grading/problem
function gradingStudents(grades) {
  let result = [];
  for(let i = 0;i< grades.length;i++){
      if(grades[i] >= 38){
          if(grades[i]%5>=3) result.push(grades[i]-(grades[i]%5)+5);
          else result.push(grades[i])
      }    
      else  result.push(grades[i]);
  }
  return result;
}

let result = gradingStudents([73,67,38,33]);
console.log(result)