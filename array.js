const colors = [
  {
    name: "Pink",
    numbers: [1, 2, 3, 4],
    year: 2023,
    shade: "dark",
  },
  {
    name: "Purple",
    numbers: [5, 6, 7, 8],
    year: 2022,
    shade: "light",
  },
  {
    name: "Blue",
    numbers: [9, 10, 11, 12],
    year: 2021,
    shade: "dark",
  },
  {
    name: "Orange",
    numbers: [13, 14, 15, 16],
    year: 2020,
    shade: "light",
  },
  {
    name: "Green",
    numbers: [17, 18, 19, 20],
    year: 2019, 
    shade: "dark",
  },
];

colors.forEach((colors)=> console.log(colors.name))
colors.forEach((colors)=> console.log(colors.numbers));
const arrbyshade = colors.filter(Filterbyshade[dark]);
console.log(arrbyshade)
