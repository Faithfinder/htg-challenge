import { isPalindrome } from "./2-palindrome";

test.each(["1237321", "1", "098890"])("%p is palindrome", palindrome => {
  expect(isPalindrome(palindrome)).toBe(true);
});

test.each(["123000", "10", "7778"])("%p is not palindrome", notPalindrome => {
  expect(isPalindrome(notPalindrome)).toBe(false);
});