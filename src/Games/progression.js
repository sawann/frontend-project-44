import num from '../randomNumb.js';
import base from '../gameComparison.js';

const progressGame = () => {
  const progressNote = 'What number is missing in the progression?';

  const progrTask = () => {
    const sequence = [];
    const lastInd = 9;

    const stepGet = () => {
      const necessaryStep = num(7);

      return (necessaryStep === 0 ? stepGet() : necessaryStep);
    };
    const step = stepGet();

    const firstNumb = () => {
      const numb = num(100);
      const numLimit = numb + (step * lastInd);
      if (numLimit > 100) { return firstNumb(); }

      return numb;
    };
    const startNumb = firstNumb();

    for (let i = 0, numbNext = startNumb; i < 10; i += 1, numbNext += step) {
      sequence.push(numbNext);
    }
    const indexRand = num(lastInd);
    const replaceNum = sequence[indexRand];
    let result = replaceNum;
    sequence[indexRand] = '..';

    const quest = sequence.join(' ');

    result = result.toString();

    return [quest, result];
  };
  base(progressNote, progrTask);
};

export default progressGame;