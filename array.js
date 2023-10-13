const colors = [
  {
    name: "Pink",
    numbers: [1, 2, 3, 4],
    year: 2023,
    popular: true,
  },
  {
    name: "Purple",
    numbers: [5, 6, 7, 8],
    year: 2022,
    popular: true,
  },
  {
    name: "Blue",
    numbers: [9, 10, 11, 12],
    year: 2021,
    popular: true,
  },
  {
    name: "Orange",
    numbers: [13, 14, 15, 16],
    year: 2020,
    popular: false,
  },
  {
    name: "Green",
    numbers: [17, 18, 19, 20],
    year: 2019, 
    popular: false,
  },
];

colors.forEach((colors)=> console.log(colors.name))
colors.forEach((flag)=> {
  flag.numbers.forEach((Fk)=> console.log(Fk))
})
const popular = colors.filter((hill)=> {
  return hill.popular === true
})
console.log(popular)