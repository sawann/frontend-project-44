import random from '../randomNubers.js';
import base from '../gameMatching.js';

const evenGame = () => {
    const note = 'Answer "yes" if the number is even, otherwise answer "no".';

    const evenQuestion = () =>{
        const num = random(100);
        
        const cheking = num % 2 == 0 ? "yes" : "no";

        return [`${num}`, cheking];
    };
    base(note, evenQuestion);
};

export default evenGame;