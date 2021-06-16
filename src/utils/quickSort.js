const quickSort = (unsortedArr, comparator) => {
  const sortedArr = [...unsortedArr];

  const recursiveSort = (start, end) => {
    if (end - start < 1) {
      return;
    }

    const pivotValue = sortedArr[end];

    let splitIndex = start;

    for (let i = start; i < end; i++) {
      const sort = comparator(sortedArr[i].points, pivotValue.points);
      if (sort === 1) {
        if (splitIndex !== i) {
          const temp = sortedArr[splitIndex];
          sortedArr[splitIndex] = sortedArr[i];
          sortedArr[i] = temp;
        }
        splitIndex++;
      }
    }
    sortedArr[end] = sortedArr[splitIndex];
    sortedArr[splitIndex] = pivotValue;

    // Recursively sort the less-than and greater-than arrays.
    recursiveSort(start, splitIndex - 1);
    recursiveSort(splitIndex + 1, end);
  };

  recursiveSort(0, unsortedArr.length - 1);
  return sortedArr;
};

export { quickSort };
