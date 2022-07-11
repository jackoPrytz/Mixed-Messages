console.log('Whats up bitches!!!')
const messageOneComponent = ['red', 'blue', 'green', 'yellow'];
const messageTwoComponent = ['house','car','boat', 'tree'];
const messageThreeComponent = ['bananas','fish','cake','cheese'];

let randomCompOne = Math.floor(Math.random()*4);
let randomCompTwo = Math.floor(Math.random()*4);
let randomCompThree = Math.floor(Math.random()*4);

console.log(`Your favourite color is ${messageOneComponent[randomCompOne]}`);
console.log(`Which means you live in a ${messageTwoComponent[randomCompTwo]}`)
console.log(`and, you love to eat ${messageThreeComponent[randomCompThree]}`)
