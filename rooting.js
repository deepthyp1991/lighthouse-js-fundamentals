const judgeVegetable = function(vegetables, metric){
  let maxiMetric = -1
  let maxiName

  for (const vegetable of vegetables){
    if(vegetable[metric] >= maxiMetric){
      maxiMetric = vegetable[metric]
      maxiName = vegetable['submitter']
    }
  }
  return maxiName
 }
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))
