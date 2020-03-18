export const getPalindromes = (lowestInt, highestInt) => {
  return new Promise(resolve => {
    let palindromes = new Set();
    const generator = multipleGenerator(lowestInt, highestInt);
    for (const multiple of generator) {
      if (isPalindrome(multiple)) palindromes.add(multiple);
    }

    resolve([...palindromes]);
  });
};

function* multipleGenerator(lowestInt, highestInt) {
  for (let i = lowestInt; i <= highestInt; i++) {
    for (let j = lowestInt; j <= highestInt; j++) {
      yield i * j;
    }
  }
}

export const isPalindrome = palindromeInt => {
  const palindrome = palindromeInt.toString();
  return (
    palindrome ===
    palindrome
      .split("")
      .reverse()
      .join("")
  );
};
