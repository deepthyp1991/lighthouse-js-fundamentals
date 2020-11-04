function lastIndexOf(number, value){
  console.log(number)
  let sum
 for(let i = 0; i < number.length; i++){
   if(number[i] === value){
     sum = i
   }
  }
  if (sum>=0)
  return sum
  else return -1
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));
