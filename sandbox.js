// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((acc, curr) => {
//   if (curr > 50) {
//     acc++;
//   }
//   return acc;
// }, 0);

// console.log(result);

const scores = [
  { name: "A", score: 30 },
  { name: "B", score: 50 },
  { name: "C ", score: 40 },
  { name: "D", score: 10 },
  { name: "A", score: 70 },
  { name: "A", score: 30 },
  { name: "B", score: 50 },
  { name: "C ", score: 40 },
  { name: "D", score: 10 },
  { name: "A", score: 70 },
  { name: "A", score: 30 },
  { name: "B", score: 50 },
  { name: "C ", score: 40 },
  { name: "D", score: 10 },
  { name: "A", score: 70 },
];

const ATotal = scores.reduce((acc, curr) => {
  if (curr.name === "A") {
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(ATotal);
