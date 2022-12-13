import readlineSync from 'readline-sync';

const TakeName = () =>{
    const name = readlineSync.question('Type ur name: ');
    console.log(`Hello, ${name}`);
}

export default TakeName;