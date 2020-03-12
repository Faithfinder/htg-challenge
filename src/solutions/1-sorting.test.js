import { quickSort, createRandomIntegerArray } from "./1-sorting";

test("Random integer array is random", () => {
  const array1 = createRandomIntegerArray();
  const array2 = createRandomIntegerArray();
  expect(array1).not.toEqual(array2);
});

test("my implementation should sort predetermined array correctly", () => {
  const testArray = [100, 5, 15, 1, 44, -30];
  const mySortedArray = quickSort(testArray);
  const builtInSortedArray = [...testArray].sort((a, b) => a - b);
  expect(mySortedArray).toEqual(builtInSortedArray);
});

test("my implementation should sort random array correctly", () => {
  const testArray = createRandomIntegerArray();
  const mySortedArray = quickSort(testArray);
  const builtInSortedArray = [...testArray].sort((a, b) => a - b);
  expect(mySortedArray).toEqual(builtInSortedArray);
});
