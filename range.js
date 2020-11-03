function range(start, end, step)
{
  const newRange = []
  for (var i = start; start <= end ? i <= end : i >= end; i += step)
  {
    newRange.push(i)
  }
  return newRange
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));