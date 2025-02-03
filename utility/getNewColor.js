// const getRandomNumber = (arr) => arr[Math.floor(Math.random() * 16)];

// export const getNewColor = () => {
//   return [
//     "#",
//     ...Array.apply(null, Array(6)).map(() =>
//       getRandomNumber("0123456789ABCDEF")
//     ),
//   ].join("");
// };

export const colorString = "0123456789ABCDEF";
export const getNewColor = () => {
  return [
    "#",
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0"),
  ].join("");
};
