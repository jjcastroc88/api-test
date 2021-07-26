import express from 'express';
import log4js from 'log4js';

log4js.configure({
  appenders: {
    out: {type: 'stdout'},
    server: {type: 'file', filename: './logs/server.log'},
  },
  categories: {default: {appenders: ['server', 'out'], level: 'error'}},
});
const logger = log4js.getLogger('server');
logger.level = 'all';

const app = express();
const PORT = 3002;

const BIG = 'Big';
const BANG = 'Bang';
const THEORY = 'Theory';

export const getLabel = value => {
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

export const getNumbers = number => {
  const numbers = [];

  for (let i = 1; i <= number; i++) {
    numbers.push(getLabel(i));
  }

  logger.info('message info', `the Response is ${numbers.join('-')}`);
  return numbers;
}

app.get('/api/numbers/:number', (req, res) => {
  const currentNumber = +req.params.number;

  if (!currentNumber) {
    logger.error('message error', `the number is not correct ${currentNumber}`);
    res.json({'message': 'error'});
  }

  res.json({'data': getNumbers(currentNumber)});
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  logger.info(`Server running at http://localhost:${PORT}`);
});

app.on('uncaughtException', err => {
  logger.fatal(err);
  console.fatal(err);
  process.exit(1);
});
