

function handleInputChange(inputElement, outputElement, transform = (val) => val) {
  inputElement.addEventListener('input', function () {
    const inputValue = transform(inputElement.value);
    outputElement.textContent = inputValue;
  });
}

function updateExpDate() {
  const monthValue = expMonth.value;
  const yearValue = expYear.value;
  expDateChange.textContent = `${monthValue}/${yearValue}`;
}

const cardHolderName = document.querySelector('.js-nameInput');
const holderNameChange = document.querySelector('.js-holderName');
handleInputChange(cardHolderName, holderNameChange, (val) => val.toUpperCase());

const cardNumber = document.querySelector('.js-cardNumberInput');
const cardNumberChange = document.querySelector('.js-cardNumber');
handleInputChange(cardNumber, cardNumberChange);

const expMonth = document.querySelector('.js-monthInput');
const expYear = document.querySelector('.js-yearInput');
const expDateChange = document.querySelector('.js-holderBirthDate');
expMonth.addEventListener('input', updateExpDate);
expYear.addEventListener('input', updateExpDate);

const cvc = document.querySelector('.js-cvcInput');
const cvcChange = document.querySelector('.js-securityBin');
handleInputChange(cvc, cvcChange);

function confirmingFields() {
 const name = cardHolderName.value.trim();
 const nameErrorMessage = document.querySelector('.js-nameErrorMessage');
 const alphabetPattern = /^[A-Za-z]+$/;
 if (!alphabetPattern.test(name)) {
  nameErrorMessage.innerHTML='Wrong Format, characters only';
 }
 else{ 
  nameErrorMessage.innerHTML='';
  // inputConfirmed();
 }
}


function countingCharacters(element,desiredNumber,errorMessage) {
  const inputText = element.value.trim();
  const characterCount = inputText.length;
  let error = document.querySelector(errorMessage);

  if (characterCount === desiredNumber) {
    inputConfirmed();
    error.innerHTML = '';
  }
  else{
    error.innerHTML = 'Invalid number of characters';
  }
}

function confirmingDate(element,desiredNumber,errorMessage,n) {
  const inputText = element.value.trim();
  const characterCount = inputText.length;
  let error = document.querySelector(errorMessage);

  if (characterCount !== desiredNumber || inputText > n ) {
    inputConfirmed();
    error.innerHTML = '';
    error.innerHTML = 'Invalid';
  }
  else  {
    error.innerHTML = '';
  }
}

function inputConfirmed() {
  
}