const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

// Function to handle validation and display results
const validateAndParseUSPhoneNumber = (input) => {
  if (input === '') {
    alert('Please provide a phone number');
    return;
  }

  // Define regex components
  const countryCodeRegex = '^(1\\s?)?'; // Country code must be "1"
  const areaCodeRegex = '(\\([0-9]{3}\\)|[0-9]{3})'; // Area code must be 3 digits, optionally in parentheses
  const separatorRegex = '[\\s\\-]?'; // Separators allowed: space, dash, or dot
  const phoneNumberRegex = '[0-9]{3}[\\s\\-]?[0-9]{4}$'; // Phone number in 7-digit format, with optional separator

  // General parsing regex to extract components
  const parseRegex = new RegExp(
    `${countryCodeRegex}${areaCodeRegex}${separatorRegex}${phoneNumberRegex}`
  );
  const match = input.match(parseRegex);

  const paragraphTag = document.createElement('p');
  paragraphTag.className = 'results-text';

  if (!match) {
    paragraphTag.style.color = '#b22222'; // Invalid input color
    paragraphTag.textContent = `Invalid US number: ${input}`;
  } else {
    paragraphTag.style.color = '#00471b'; // Valid input color
    paragraphTag.textContent = `Valid US number: ${input}`;
  }

  resultsDiv.appendChild(paragraphTag);
};

// Event listeners
checkBtn.addEventListener('click', () => {
  validateAndParseUSPhoneNumber(userInput.value.trim());
  userInput.value = '';
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    validateAndParseUSPhoneNumber(userInput.value.trim());
    userInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});
