//TODO доделать алгоритм для рекомендаций

// Promise.allSettled([
//   movieAPI.getByTitle("The"),
//   movieAPI.getByTitle("Lego"),
//   movieAPI.getByTitle("Batman"),
//   movieAPI.getByTitle("Movie"),
// ])
//   .then((res) => {
//     return res
//       .reduce((acc: any[], item) => {
//         if (item.status === "fulfilled" && item.value.Response === "True") {
//           acc = [...acc, ...(item.value.Search as Array<any>)];
//         }
//         return acc;
//       }, [])
//       .sort(() => {
//         return Math.random() > 0.5 ? 1 : -1;
//       });
//   })
//   .then((res) => {return res.length = 10});

export const recommended = (title: string) => {
  if (title?.split(" ").length !== 1) {
    return `${title?.split(" ")[0]} ${title?.split(" ")[1]}`;
  } else {
    return title?.split(" ")[0];
  };
};