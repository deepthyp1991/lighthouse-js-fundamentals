function concat(array1, array2){
  const combined = array1.concat(array2)
  return combined
 }
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]))
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]))
console.log(concat([], [ 9, 7, 2 ]))
console.log(concat([ 5, 10 ], []))