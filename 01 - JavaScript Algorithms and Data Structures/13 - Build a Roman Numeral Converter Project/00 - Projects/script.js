const inputNumber = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const divOutput = document.getElementById('output');

const romanToNumber = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
];

const convertTheNumberToRoman = (number) => {
  const result = [];

  romanToNumber.forEach((arr) => {
    while (number >= arr[1]) {
      result.push(arr[0]);
      number -= arr[1];
    }
  });

  return result.join('');
};

const isValidInput = (str, int) => {
  let errText = '';

  if (!str || str.match(/[e.]/g)) {
    errText = 'Please enter a valid number.';
  } else if (int < 1) {
    errText = 'Please enter a number greater than or equal to 1.';
  } else if (int > 3999) {
    errText = 'Please enter a number less than or equal to 3999.';
  } else {
    // If there is no errors detected, will return true
    return true;
  }

  divOutput.innerText = errText; // Will display the error;
  divOutput.classList.add('alert'); // Will styling the output;

  return false;
};

const clearTheOutput = () => {
  divOutput.innerText = '';
  divOutput.classList.remove('alert');
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  updateUI();
});

convertBtn.addEventListener('click', () => {
  updateUI();
});

const updateUI = () => {
  const numStr = document.getElementById('number').value;
  const int = parseInt(numStr, 10);

  divOutput.classList.remove('hidden');

  clearTheOutput();

  if (isValidInput(numStr, int)) {
    divOutput.innerText = convertTheNumberToRoman(int);
  }
};
