import base from '../gameComparison.js';
import num from '../randomNumb.js';

const calc = () => {
  const calcNote = 'What is the result of the expression?';

  const Task = () => {
    const num1 = num(100);
    const num2 = num(100);

    const signs = ['+', '-', '*'];
    const sing = signs[num(2)];

    const quest = `${num1} ${sing} ${num2}`;

    let result = 0;
    switch (sing) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        result = null;
    }

    result = result.toString();

    return [quest, result];
  };

  base(calcNote, Task);
};

export default calc;