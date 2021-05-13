export const sortByChildren = (charArray) => {
  charArray.sort((a, b) => {
    if (a.children.length < b.children.length) {
      return -1;
    } else {
      return 1;
    }
  });
  return charArray;

};

// charArray.sort((a, b) => ((a.children > b.children) ? 1 : -1)