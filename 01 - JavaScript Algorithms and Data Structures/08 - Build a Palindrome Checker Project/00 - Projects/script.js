const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const resultDiv = document.getElementById('result');

// Function to clean the string
const cleanString = (str) => str.toLowerCase().replace(/[^a-z0-9]/gi, '');

// Function to check if a string is a palindrome
const checkPalindrome = (str) => {
  const cleanResult = cleanString(str); // Clean the string
  const reversedResult = cleanResult.split('').reverse().join(''); // Reverse the cleaned string

  return cleanResult === reversedResult; // Compare cleaned string with reversed string
};

const checkInput = (value) => {
  // Check if the input is empty
  if (value.length === 0) {
    alert('Please input a value');
  } else {
    // Remove previous result
    resultDiv.replaceChildren();

    const isPalindrome = checkPalindrome(value);

    // Create a paragraph element
    const createParagraph = document.createElement('p');
    createParagraph.className = 'user-input';

    // Set the innerHTML based on whether the input is a palindrome
    if (isPalindrome) {
      createParagraph.innerHTML = `<strong>${value}</strong> is a palindrome`;
    } else {
      createParagraph.innerHTML = `<strong>${value}</strong> is not a palindrome`;
    }

    // Append the paragraph to the resultDiv
    resultDiv.appendChild(createParagraph);

    // Show the result.
    resultDiv.classList.remove('hidden');
  }
};

checkBtn.addEventListener('click', () => {
  checkInput(textInput.value);
  textInput.value = '';
});

textInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkInput(textInput.value);
    textInput.value = '';
  }
});
