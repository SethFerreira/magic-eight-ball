let randomNumber = Math.floor(Math.random() * 8);
// Input user name to the console
const userName = 'Seth';
// Ask a question (no question mark needed)
const userQuestion = 'Can I have a puppy';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
console.log(`You ask, ${userQuestion}? The Magic Eight Ball says`);

let eightBall = '';
switch (eightBall = randomNumber) {
  case randomNumber = 0:
    randomNumber = 'It is certain';
    break;
  case randomNumber = 1:
    randomNumber = 'It is decidedly so'; 
    break;
  case randomNumber = 2:
    randomNumber = 'Reply hazy try again';
    break;
  case randomNumber = 3:
    randomNumber = 'Cannot predict now';
    break;
  case randomNumber = 4:
    randomNumber = 'Do not count on it';
    break;
  case randomNumber = 5:
    randomNumber = 'My sources say no';
    break;
  case randomNumber = 6:
    randomNumber = 'Outlook not so good';
    break;
  default: 
    randomNumber = 'Signs point to yes';
    break;
}
console.log(eightBall = randomNumber);
