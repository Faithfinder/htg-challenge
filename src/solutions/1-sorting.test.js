import { quickSort } from "./1-sorting";

test("my implementation should sort predetermined array correctly", () => {
  const testArray = [100, 5, 15, 1, 44, -30];
  const mySortedArray = quickSort(testArray);
  const builtInSortedArray = [...testArray].sort((a, b) => a - b);
  expect(mySortedArray).toEqual(builtInSortedArray);
});
