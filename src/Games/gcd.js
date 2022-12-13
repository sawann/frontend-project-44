import base from '../gameComparison.js';
import num from '../randomNumb.js';

const gcd = () => {
  const gcdNote = 'Find the greatest common divisor of given numbers.';

  const Task = () => {
    const num1 = num(100);
    const num2 = num(100);

    const quest = `${num1} ${num2}`;

    const Get = (numb1, numb2) => {
      let number1 = numb1;
      let number2 = numb2;
      while (number1 !== 0 && number2 !== 0) {
        if (number1 > number2) {
          number1 %= number2;
        } else {
          number2 %= number1;
        }
      }
      return (number1 + number2);
    };

    const result = Get(num1, num2).toString();

    return [quest, result];
  };

  base(gcdNote, Task);
};

export default gcd;