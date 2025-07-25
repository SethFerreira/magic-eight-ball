let randomNumber = Math.floor(Math.random() * 8);
// Logs user name to the console
const userName = 'Seth';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
// The Magic Eight Ball asks a question to the user
const userQuestion = 'The magic Eight Ball asks,';
console.log(`${userQuestion} ${userName}`);

let eightBall = '';
if (randomNumber === 0) {
  randomNumber = 'It is certain';
} else if (eightBall === 1) {
  randomNumber = 'It is decidedly so';
} else if (randomNumber === 2) {
  randomNumber = 'Reply hazy try again';
} else if (randomNumber === 3) {
  randomNumber = 'Cannot predict now';
} else if (randomNumber === 4) {
  randomNumber = 'Do not count on it';
} else if (randomNumber === 5) {
  randomNumber = 'My sources say no';
} else if (randomNumber === 6) {
  randomNumber = 'Outlook not so good';
} else {
  randomNumber = 'Signs point to yes';
}
console.log(eightBall = randomNumber);