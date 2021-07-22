const express = require('express');
const app = express();
const PORT = 3002;

const BIG = 'Big';
const BANG = 'Bang';
const THEORY = 'Theory';

const getLabel = value => {
  let label = value;
  const isMultiThree = (value % 3) === 0;
  const isMultiFive = (value % 5) === 0;
  const isMultiSeven = (value % 7) === 0;

  if (isMultiThree && isMultiFive && isMultiSeven) {
    label = `${BIG}${BANG}${THEORY}`;
  } else if (isMultiThree && isMultiFive) {
    label = `${BIG}${BANG}`;
  } else if (isMultiThree && isMultiSeven) {
    label = `${BIG}${THEORY}`;
  } else if (isMultiFive && isMultiSeven) {
    label = `${BANG}${THEORY}`;
  } else if (isMultiThree) {
    label = BIG;
  } else if (isMultiFive) {
    label = BANG;
  } else if (isMultiSeven) {
    label = THEORY;
  }

  return label;
}

const getNumbers = number => {
  const numbers = [];

  for (let i = 1; i <= number; i++) {
    numbers.push(getLabel(i));
  }

  return numbers;
}

app.get('/api/numbers/:number', (req, res) => {
  const currentNumber = +req.params.number;

  if (!currentNumber) {
    res.json({'message': 'error'});
  }

  res.json({'data': getNumbers(currentNumber)});
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

