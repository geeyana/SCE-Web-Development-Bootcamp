function translateChars(message) {
  return message
  .replaceAll('#', 'a')
  .replaceAll('%', 'e')
  .replaceAll('^', 'o')
  .replaceAll('&', 's')
  .replaceAll('*', 'm')
}

function reverseEachWord(message) {
  let words = message.split(" ");
  let reverseWords = [];

  for (let word of words) {
    let letters = word.split("");
    let reversed = letters.reverse().join("");
    reverseWords.push(reversed);
  }
  return reverseWords.join(" ");
}

const inputElement = document.getElementById('encodedInput');
const btnElement = document.getElementById('decodeButton');
const outElement = document.getElementById('decodedOutput');

btnElement.addEventListener('click', () => {
  const raw = (inputElement.value || '').trim();
  const step1 = translateChars(raw);
  const decoded = reverseEachWord(step1);

  outElement.textContent = decoded;
})