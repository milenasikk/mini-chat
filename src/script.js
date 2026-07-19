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

    "conditions": `Conditions allow your code to make decisions using if, else if, and else statements based on true or false values.

Example:
const points = 85;

if (points >= 90) {
    console.log("Rank: A");
} else if (points >= 75) {
    console.log("Rank: B"); // Runs this block!
} else {
    console.log("Try again!");
}`,

    "functions": `Functions are reusable blocks of code designed to perform a specific task when called.

Common way to write functions in JS:
function sayHi(name) {
    return "Hello, " + name + "!";
}

Calling a function:
const greeting = sayHi("Alex");
console.log(greeting); // Output: Hello, Alex!`,

    "arrow-functions": `Arrow Functions provide a concise and modern shorthand syntax for writing function expressions in JS.

Classic syntax:
const double = function(x) {
    return x * 2;
};

Modern Arrow syntax:
const double = (x) => x * 2;

If there is only one parameter, you can drop the parentheses:
const square = x => x * x;`,

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
}`,

    "arrays": `Arrays are ordered lists of values. They can hold multiple items of any data type. Array indexing always starts at zero (0).

Example:
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // Output: Apple
console.log(fruits.length); // Output: 3`,

    "array-methods": `Array Methods allow you to easily manipulate data collections.

Popular modern methods:
• push() / pop() - add/remove elements at the end.
• shift() / unshift() - add/remove elements at the start.
• map() - creates a new array by transforming every element.
• filter() - creates a new array with elements that pass a test condition.

Example:
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]`,

    "objects": `Objects are collections of key-value pairs. They are perfect for describing real-world entities.

Example:
const user = {
    name: "Alex",
    age: 21,
    isCoding: true
};

How to read values:
console.log(user.name); // Output: Alex
console.log(user["age"]); // Output: 21`,

    "dom": `The DOM (Document Object Model) is a programming interface that lets JS interact with HTML structures to update content, styles, and handle events.

Common operations:
• document.getElementById() - selects an element by ID.
• document.querySelector() - selects an element by CSS selector.
• element.addEventListener() - listens for events like 'click'.

Example:
const btn = document.querySelector('.send-btn');
btn.addEventListener('click', () => {
    alert('Clicked!');
});`,

    "async": `Asynchronous JavaScript allows you to execute long-running tasks (like fetching data from an API) without freezing the entire interface.

1. Promises: Represent an operation that will complete in the future.
2. Async/Await: The modern, clean way to handle promises.

Example:
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Oops!", error);
    }
}`
};

// DOM Elements
const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Event Listeners for click and Enter key
sendBtn.addEventListener('click', handleSend);
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !userInput.disabled) handleSend();
});

// Event Delegation for Topic Chips (Клик по пиксельным кнопочкам тем)
chatContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('topic-chip')) {
        if (userInput.disabled) return; // Блокируем клик, если бот уже печатает
        const selectedTopic = e.target.getAttribute('data-topic');
        sendTopic(selectedTopic);
    }
});

// Отправка темы при клике на чип
function sendTopic(topicName) {
    appendMessage(topicName, 'user-message');
    showTypingIndicator();
}

// Handling Send Action (Обычная отправка из инпута)
function handleSend() {
    const text = userInput.value.trim();
    if (text === '') return;

    // Render user message
    appendMessage(text, 'user-message');
    userInput.value = ''; // Clear the input field

    // Show typing indicator
    showTypingIndicator();
}

// Append messages to the chat container
function appendMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    
    // Если это приветственное сообщение от бота, сохраняем разметку чипсов
    if (className === 'bot-message' && text.includes('chips-container')) {
        messageDiv.innerHTML = text;
    } else {
        messageDiv.innerText = text;
    }
    
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Auto-scroll to bottom
    return messageDiv;
}

// Переключение состояния элементов интерфейса (блокировка при печати)
function setInterfaceDisabled(status) {
    userInput.disabled = status;
    sendBtn.disabled = status;
}

// Typing Indicator delay ("Thinking...")
function showTypingIndicator() {
    setInterfaceDisabled(true); // Запрещаем ввод, пока бот думает
    const tempMessage = appendMessage('Hmm, thinking...', 'bot-message');
    
    setTimeout(() => {
        tempMessage.remove(); // Remove temporary typing text
        generateBotResponse();
    }, 1200); // 1.2s delay
}

// Search database and start typing response
function generateBotResponse() {
    const userMessages = document.querySelectorAll('.user-message');
    const lastUserText = userMessages[userMessages.length - 1].innerText.toLowerCase();

    let reply = "Hmm, I don't know that topic yet. Try asking about: 'variables', 'functions', 'loops', 'objects', or 'arrays'.";

    // Matching key terms
    for (const key in jsTopics) {
        if (lastUserText.includes(key)) {
            reply = jsTopics[key];
            break;
        }
    }

    const botMessageElement = appendMessage('', 'bot-message');
    typeText(botMessageElement, reply);
}

// Typewriter Effect (Time Delay)
function typeText(element, text) {
    let index = 0;
    const speed = 15; // Delay in ms between each character

    function type() {
        if (index < text.length) {
            element.innerText += text.charAt(index);
            index++;
            chatContainer.scrollTop = chatContainer.scrollHeight; // Constant scrolling
            setTimeout(type, speed);
        } else {
            setInterfaceDisabled(false); // Возвращаем доступ к инпуту, когда бот закончил[cite: 12]
        }
    }
    type();
}