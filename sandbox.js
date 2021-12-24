const scores = [10, 30, 15, 25, 50, 40, 5];

const filteredScores = scores.filter((score) => {
  return score > 20;
});

console.log(filteredScores);

const users = [
  { name: "A", premium: true },
  { name: "B", premium: false },
  { name: "C", premium: false },
  { name: "D", premium: true },
];

const premiumUsers = users.filter((user) => {
  return user.premium;
});

console.log(premiumUsers);
