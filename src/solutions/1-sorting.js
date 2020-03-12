export const createRandomIntegerArray = (
  size = 100,
  lowestInteger = 1,
  highestInteger = 99
) => {
  return Array.from({ length: size }, () =>
    getRandomInRange(lowestInteger, highestInteger)
  );

  function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
};

export const quickSort = originalArray => {
  const sortedArray = [...originalArray];
  const stack = [];
  if (sortedArray.length > 1) stack.push(new Range(0, sortedArray.length - 1));

  while (stack.length) {
    const range = stack.pop();

    let partitionLow = range.start;
    let partitionHigh = range.end - 1;

    const pivotValue = extractPivot(range, sortedArray);

    while (true) {
      partitionLow = findHighestLeftOfPivot(
        partitionLow,
        partitionHigh,
        sortedArray,
        pivotValue
      );
      partitionHigh = findLowestRightOfPivot(
        partitionLow,
        partitionHigh,
        sortedArray,
        pivotValue
      );

      let subArraySorted = partitionLow > partitionHigh;
      if (subArraySorted) break;

      swapItems(sortedArray, partitionLow, partitionHigh);
    }

    sortedArray[range.end] = sortedArray[partitionLow];
    sortedArray[partitionLow] = pivotValue;

    const leftRange = new Range(range.start, partitionLow - 1);
    if (leftRange.hasElements()) stack.push(leftRange);
    const rightRange = new Range(partitionLow + 1, range.end);
    if (rightRange.hasElements()) stack.push(rightRange);
  }

  return sortedArray;

  function extractPivot(range, sortedArray) {
    const pivotIndex = range.start;
    const pivotValue = sortedArray[pivotIndex];
    sortedArray[pivotIndex] = sortedArray[range.end];
    return pivotValue;
  }

  function findLowestRightOfPivot(
    partitionLow,
    partitionHigh,
    sortedArray,
    pivotValue
  ) {
    while (
      partitionLow <= partitionHigh &&
      sortedArray[partitionHigh] !== undefined &&
      sortedArray[partitionHigh] >= pivotValue
    ) {
      partitionHigh--;
    }
    return partitionHigh;
  }

  function findHighestLeftOfPivot(
    partitionLow,
    partitionHigh,
    sortedArray,
    pivotValue
  ) {
    while (
      partitionLow <= partitionHigh &&
      sortedArray[partitionLow] !== undefined &&
      sortedArray[partitionLow] < pivotValue
    ) {
      partitionLow++;
    }
    return partitionLow;
  }

  function swapItems(array, firstIndex, secondIndex) {
    const temporaryArrayItem = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temporaryArrayItem;
  }
};

class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  hasElements = () => {
    return this.start < this.end;
  };
}
