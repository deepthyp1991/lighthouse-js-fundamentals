const carPassing = function(cars, speed){
  const newSpeed = {
    time: Date.now(),
    speed,
  };
  cars.push(newSpeed);
  return cars
}
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

console.log(cars[0].speed);

// const speed = 38

// console.log(carPassing(cars,speed))