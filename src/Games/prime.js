import base from '../gameComparison.js';
import num from '../randomNumb.js';

const prime = () => {
  const primeNote = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const Task = () => {
    const numb = num(100);

    const Num = (num) => {
      if (num < 2) { return false; }

      let i = 2;
      while (i <= num / 2) {
        if (num % i === 0) { return false; }
        i += 1;
      }

      return true;
    };
    const quest = `${numb}`;

    const result = (Num(numb) ? 'yes' : 'no');

    return [quest, result];
  };
  base(primeNote, Task);
};

export default prime;