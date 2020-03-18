import { isAnagram } from "./3-anagram";

test.each([
  ["Debit Card", "Bad Credit"],
  ["Astronomer", "Moon starer"],
  ["These churn air", "The Hurricanes"]
])("%p and %p is anagram", (base, anagram) => {
  expect(isAnagram(base, anagram)).toBe(true);
});

test.each([["Dormitory", "Dirty rooms"], ["abc", "123"]])(
  "%p and %p is not anagram",
  (base, notAnagram) => {
    expect(isAnagram(base, notAnagram)).toBe(false);
  }
);
