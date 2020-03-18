export const isAnagram = (string1, string2) => {
  return normalize(string1) === normalize(string2);
};

const normalize = str =>
  str
    .toLowerCase()
    .replace(/[^A-Z]+/gi, "")
    .split("")
    .sort()
    .join();
