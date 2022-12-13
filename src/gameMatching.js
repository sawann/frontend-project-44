import readlineSync from 'readline-sync';

const gameBase = (note, quest) => {
    console.log("Welcome to the Brain Games!");

    const name = readlineSync.question("May i have ur name?");
    console.log(`Hello, ${name}`);

    for(let i = 0; i < 3; i++)
    {
        const quesAndRes = quest();
        console.log(`Question: ${quesAndRes[0]}`);
        const answer = readlineSync.question("Your answer: ");
        
        const rightAnsw = quesAndRes[1];

        if(answer === rightAnsw)
            console.log('Correct!');
        else{
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnsw}'. \nLet's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};

export default gameBase;