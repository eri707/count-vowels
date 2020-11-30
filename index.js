const greeting = 'Hello, how are you doing';
// split the string into array
const characterArray = greeting.split('');
console.log(characterArray);
// filter vowels from array
function countVowels(characterArray) {
    return characterArray.filter(char => char == 'a' || char == 'i' || char == 'u' || char == 'e' || char == 'o');
}
// count the vowles
console.log(countVowels(characterArray).length);

// filter vowels from an array using include
function checkIfVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char)
}
const filteredVowels = characterArray.filter(checkIfVowel);
console.log(filteredVowels.length);