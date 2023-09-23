const cardName = document.getElementById('name');
const nameInput = document.getElementById('name-input');

const cardNumber = document.getElementById('number');
const numberInput = document.getElementById('number-input');

const cardMonth = document.getElementById('month');
const monthInput = document.getElementById('month-input');

const cardYear = document.getElementById('year');
const yearInput = document.getElementById('year-input');

const cardCVC = document.getElementById('CVC');
const CVCInput = document.getElementById('CVC-input');

nameInput.addEventListener('keyup', () => {
  cardName.innerHTML = nameInput.value;
  if (cardName.innerHTML === '') {
    cardName.innerHTML = 'Jane Appleseed';
  }
});

numberInput.addEventListener('keyup', () => {
  function splitEveryN(str, n, arr = []) {
    if (str.length === 0) {
      return arr;
    }

    arr.push(str.slice(0, n));
    return splitEveryN(str.slice(n), n, arr);
  }

  const splitNumber = splitEveryN(numberInput.value, 4);
  const mergedNumber = splitNumber.join(' ');
  cardNumber.innerHTML = mergedNumber;
  if (cardNumber.innerHTML === '') {
    cardNumber.innerHTML = '0000 0000 0000 0000';
  }
});

monthInput.addEventListener('keyup', () => {
  cardMonth.innerHTML = monthInput.value;
  if (cardMonth.innerHTML === '') {
    cardMonth.innerHTML = '00';
  }
});

yearInput.addEventListener('keyup', () => {
  cardYear.innerHTML = yearInput.value;
  if (cardYear.innerHTML === '') {
    cardYear.innerHTML = '00';
  }
});

CVCInput.addEventListener('keyup', () => {
  cardCVC.innerHTML = CVCInput.value;
  if (cardCVC.innerHTML === '') {
    cardCVC.innerHTML = '00';
  }
});
