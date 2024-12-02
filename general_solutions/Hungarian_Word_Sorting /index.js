const words = ["áb", "ab", "abbb"];

const sortedWords = words.sort((a, b) => a.localeCompare(b, "hu"));

console.log(sortedWords); // Output: ['ab', 'abbb', 'áb']
