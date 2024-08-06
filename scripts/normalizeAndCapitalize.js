export default (text) => {
  // List of words that should always be lowercase
  const lowercaseWords = ["of", "the", "in", "and", "to"];

  // Replace multiple whitespace characters with a single space
  const normalizedText = text.replace(/\s+/g, " ").trim();

  // Replace multiple whitespace characters with a single space
  return normalizedText
    .split(" ")
    .map((word, index) => {
      // Check if the word is in the list of lowercase words
      // First word should be capitalized regardless
      if (lowercaseWords.includes(word.toLowerCase()) && index !== 0) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join(" ");
};
