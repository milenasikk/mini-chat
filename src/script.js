const jsTopics = {
    "variables": `Variables are named containers used to store data. In JavaScript, we have three keywords to declare them:

1. let - The modern standard. The variable's value can be reassigned later.
2. const - Short for constant. Its value cannot be changed once assigned.
3. var - The legacy standard. It has quirky scoping rules, so avoid using it.

Code Example:
let score = 100;
score = 150; // OK!

const pi = 3.14;
pi = 5; // Error! Cannot reassign a constant.`,

    "functions": `Functions are reusable blocks of code designed to perform a specific task when called.

Common ways to write functions in JS:

1. Function Declaration (Classic style):
function sayHi(name) {
    return "Hello, " + name + "!";
}

2. Function Expression (Stored in a variable):
const sayHi = function(name) {
    return "Hello, " + name + "!";
};

3. Arrow Functions (Shorthand syntax):
const sayHi = (name) => \`Hello, \${name}!\`;`,

    "loops": `Loops allow you to repeat a block of code multiple times.

Most popular loops in JS:

1. 'for' loop (used when you know how many times to repeat):
for (let i = 0; i < 5; i++) {
    console.log("Step #" + i);
}

2. 'while' loop (runs as long as the condition is true):
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

3. 'do...while' loop (guaranteed to run at least ONCE).`,

    "objects": `Objects are collections of key-value pairs. They are perfect for describing real-world entities.

Example of an object:
const user = {
    name: "Alex",
    age: 21,
    isCoding: true
};

How to read values from an object:
console.log(user.name); // Output: Alex
console.log(user["age"]); // Output: 21`,

    "arrays": `Arrays are ordered lists of values. They can hold multiple items of any data type.

Array indexing always starts at zero (0).

Example:
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // Output: Apple

Common array methods:
• fruits.push("Cherry") - adds an element to the end.
• fruits.pop() - removes the last element.
• fruits.length - returns the total number of items.`
};

const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', handleSend);
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSend();
});

function handleSend() {
    const text = userInput.value.trim();
    if (text === '') return;

    appendMessage(text, 'user-message');
    userInput.value = '';
    showTypingIndicator();
}

function appendMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    messageDiv.innerText = text;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    return messageDiv;
}

function showTypingIndicator() {
    const tempMessage = appendMessage('Hmm, thinking...', 'bot-message');
    
    setTimeout(() => {
        tempMessage.remove();
        generateBotResponse();
    }, 1200);
}

function generateBotResponse() {
    const userMessages = document.querySelectorAll('.user-message');
    const lastUserText = userMessages[userMessages.length - 1].innerText.toLowerCase();

    let reply = "Hmm, I don't know that topic yet. Try asking about: 'variables', 'functions', 'loops', 'objects', or 'arrays'.";

    for (const key in jsTopics) {
        if (lastUserText.includes(key)) {
            reply = jsTopics[key];
            break;
        }
    }

    const botMessageElement = appendMessage('', 'bot-message');
    typeText(botMessageElement, reply);
}

function typeText(element, text) {
    let index = 0;
    const speed = 15;

    function type() {
        if (index < text.length) {
            element.innerText += text.charAt(index);
            index++;
            chatContainer.scrollTop = chatContainer.scrollHeight;
            setTimeout(type, speed);
        }
    }
    type();
}