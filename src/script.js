const jsTopics = {
    "javascript-intro": `### 1. JavaScript: What is it?
JavaScript (JS) is a lightweight, interpreted programming language created by **Brendan Eich** in **1995** in just 10 days while working at Netscape. Originally designed to make static web pages alive, it has evolved into a powerhouse running both on the client side (browsers) and server side (Node.js).

* **Purpose:** To add interactivity, handle data, and build full-scale applications.
* **Core Rule:** Easy to start, runs everywhere without setups.

Code Example:
console.log("Hello, World!");`,

    "html-integration": `### 2. How JS Works with HTML
JavaScript connects to HTML using the <script> tag. The browser reads the HTML document line by line, runs the script, and manipulates the document structure (DOM).

Code Example:
<!-- index.html -->
<h1 id="title">Old Title</h1>
<script>
    const el = document.getElementById("title");
    el.innerText = "Hello from JavaScript!";
</script>`,

    "browser-console": `### 3. Browser Console
The browser console is a developer's playground built directly inside modern browsers (accessible via F12 -> Console). It allows you to run JS lines live, inspect variables, debug logic errors, and read system outputs.

Code Example:
console.log("Standard output message");
console.warn("This is a yellow warning alert");
console.error("This is a red error block");`,

    "let-const": `### 4. Variables: let & const
Variables are storage containers for data values. Modern JS completely avoids the legacy 'var' keyword.

* **let:** Reassignable variable. Block-scoped.
* **const:** Immutable constant reference. Cannot be reassigned.

Code Example:
let userScore = 100;
userScore = 120;

const birthYear = 2010;`,

    "data-types": `### 5. Primitive Data Types
JavaScript variables can hold multiple native data types automatically (Dynamic typing).

* **Number:** Integers and floats.
* **String:** Text characters wrapped in quotes.
* **Boolean:** true or false values.
* **Undefined:** Variable declared without a value assignment.
* **Null:** Explicitly empty or intentional absence of any value.
* **Symbol & BigInt:** Special unique wrappers and huge numbers.

Code Example:
let count = 42;
let userName = "lil mill";
let isOnline = true;
let blankData;
let emptySpace = null;`,

    "interpolation": `### 6. Template Literals & Interpolation
Interpolation allows you to embed expressions, calculations, and variables inside text blocks without cumbersome string addition operations (+). Uses backticks (\`) and \${expression}.

Code Example:
const artist = "Billie Eilish";
const songsCount = 3;

const message = \`My favorite singer is \${artist}, I like \${songsCount} tracks.\`;
console.log(message);`,

    "math-operations": `### 7. Mathematical Operators & Math Object
Standard operators match global arithmetic rules (+, -, *, /, %). The built-in Math object provides complex methods.

* **Math.sqrt(x):** Square root.
* **Math.sin(x) / Math.cos(x):** Trigonometric calculations.
* **Math.pow(x, y):** Exponentiation.
* **Math.round() / Math.floor() / Math.ceil():** Rounding utilities.

Code Example:
let sum = 10 + 5;
let root = Math.sqrt(16);
let power = Math.pow(2, 3);
let absolute = Math.abs(-9);`,

    "logical-operators": `### 8. Logical Operators
Used to chain evaluations or provide fallback values.

* **&& (AND):** true only if ALL operands are true.
* **|| (OR):** true if AT LEAST ONE operand is true.
* **! (NOT):** Flips the boolean state.

Code Example:
let hasToken = true;
let isAuthorized = false;

if (hasToken && !isAuthorized) {
    console.log("Check complete.");
}`,

    "ternary-nullish": `### 9. Conditional Operators (? and ??)
Compact alternatives to multi-line conditional expressions.

* **Ternary (?):** Short inline if/else statement: condition ? trueResult : falseResult.
* **Nullish Coalescing (??):** Returns the right side ONLY if the left side is null or undefined.

Code Example:
let userAge = 16;
let status = userAge >= 18 ? "Adult" : "Minor";

let inputName = null;
let profileName = inputName ?? "Guest User";`,

    "if-else": `### 10. Conditional Branches (if / else / else if)
Directs the structural flow of execution paths matching specific conditional statements.

Code Example:
let appRating = 4.5;

if (appRating >= 4.8) {
    console.log("Masterpiece");
} else if (appRating >= 4.0) {
    console.log("Great Application");
} else {
    console.log("Needs updates");
}`,

    "loops-all": `### 11. Loops (for, while, do while, for...in, for...of)
Loops repeat blocks until a state changes.

* **for:** Standard loop with a counter index.
* **while:** Runs as long as the check statement stays true.
* **do while:** Always runs at least once before the check.
* **for...in:** Steps through enumerable keys of an object.
* **for...of:** Steps directly through iterable items (like arrays).

Code Example:
for (let i = 0; i < 3; i++) console.log(i);

const items = ['a', 'b'];
for (const item of items) console.log(item);`,

    "break-continue": `### 12. Loop Control (break and continue)
Alters the regular flow of active loop blocks.

* **break:** Instantly terminates the loop and jumps out.
* **continue:** Skips the rest of the current iteration and jumps to the next one.

Code Example:
for (let num = 1; num <= 5; num++) {
    if (num === 3) continue;
    if (num === 5) break;
    console.log(num);
}`,

    "nested-loops": `### 13. Nested Loops
A loop running entirely inside another loop. Used for handling grids, matrices, or multi-dimensional operations.

Code Example:
for (let row = 1; row <= 2; row++) {
    for (let col = 1; col <= 3; col++) {
        console.log(\`Row \${row}, Col \${col}\`);
    }
}`,

    "arrays-creation": `### 14. Array Standard & Structural Initialization
Arrays house collections of items ordered by positional indexes starting at 0.

* **Literal notation:** Cleanest standard initialization.
* **new Array():** Constructor instantiation pattern.
* **Array.from():** Creates real arrays from array-like or iterable sets.

Code Example:
let base = [10, 20];
let constructed = new Array(5);
let parsed = Array.from("JS");`,

    "spread-operator": `### 15. The Spread Operator (...)
Unpacks individual elements out of an array or properties out of an object. Excellent for duplication and combinations.

Code Example:
const source = [1, 2];
const combined = [...source, 3, 4];

const user = { name: "Mill" };
const cloned = { ...user, active: true };`,

    "array-methods": `### 16. Structural Array Manipulation Methods
Methods that make managing list arrays extremely straightforward.

* **push/pop/shift/unshift:** Modify items at boundaries.
* **map/filter/reduce:** Core utilities for data mutations.
* **find/findIndex/includes/indexOf:** Location utilities.
* **slice/splice:** Copy parts or surgically mutate arrays.
* **forEach/every/some/flat/sort/reverse/concat/join:** Utility actions.

Code Example:
let numbers = [1, 2, 3, 4];
let filtered = numbers.filter(n => n > 2);
let multiplied = numbers.map(n => n * 2);`,

    "string-methods": `### 17. String Manipulation Methods
Text operations are built directly into standard JavaScript string types.

* **Case conversion:** toLowerCase(), toUpperCase()
* **Extraction:** slice(), substring(), split()
* **Trimming:** trim(), trimStart(), trimEnd()
* **Checks:** includes(), startsWith(), endsWith(), indexOf()
* **Formatting:** replace(), replaceAll(), padStart(), padEnd()

Code Example:
let raw = "   Electron App   ";
let cleaned = raw.trim().toLowerCase();
let parts = cleaned.split(" ");`,

    "regex-methods": `### 18. Regular Expressions (RegExp)
Pattern matching tools used to validate data strings or find/replace values.

* **Patterns:** \\d (digits), \\D (non-digits), \\w (word alphanumeric), \\s (whitespace), . (any character).
* **Methods:** test() (boolean check), exec(), match(), replace(), search(), split().
* **Groups & Assertions:** Parentheses () create matching groups.

Code Example:
let pattern = /\\d{3}/;
let check = pattern.test("ABC-123");
let text = "I love JS".replace(/JS/, "JavaScript");`,

    "functions-basics": `### 19. Function Foundations & Closures
Functions encapsulate logic scopes.

* **Anonymous Functions:** Functions without names, typically assigned to variables or passed as parameters.
* **Default values:** Parameters that initialize with fallbacks if left undefined.
* **Closures:** A function's superpower to remember and access variables from its outer lexicon scope even after the outer function has finished execution.

Code Example:
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter());`,

    "arrow-functions": `### 20. Arrow Functions Shorthand
Clean, compact syntax for code declarations.

* **Lexical 'this':** Arrow functions do not declare their own execution context ('this'). They adopt 'this' directly from their parent scope context.

Code Example:
const add = (a, b) => a + b;
const greeting = () => console.log("Hi!");`,

    "advanced-functions": `### 21. IIFE & Recursive Operations
* **IIFE (Immediately Invoked Function Expression):** A function that executes instantly as soon as it is defined, preventing global namespace pollution.
* **Recursion:** A design pattern where a function runs internal loops by continuously calling itself until it hits a base exit condition.

Code Example:
(function() {
    console.log("IIFE executed!");
})();

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}`,

    "hoisting": `### 22. Variable & Function Hoisting
Hoisting is a behavior in JavaScript where variable and function declarations are mentally lifted to the top of their compilation scopes before execution.

* **Function declarations:** Completely hoisted; you can invoke them before they appear in the source.
* **let & const:** Hoisted but kept in a "Temporal Dead Zone" (TDZ). Calling them early throws a ReferenceError.

Code Example:
sayHi();
function sayHi() { console.log("Hi!"); }`,

    "oop-classes": `### 23. OOP Foundations & Classes
Classes act as blueprints for generating programmatic data objects with properties and behaviors.

Code Example:
class AppController {
    constructor(appName) {
        this.name = appName;
    }
    launch() {
        console.log(\`\${this.name} started.\`);
    }
}
const myApp = new AppController("Pixel Notes");
myApp.launch();`,

    "private-methods": `### 24. Private Fields & Methods
Prepending a hash symbol (#) to variables or helper methods completely hides them from external access outside the enclosing class shell.

Code Example:
class SafeStorage {
    #encryptionKey = "SECRET123";

    #validate() {
        return true;
    }
    readData() {
        if (this.#validate()) return "Decrypted data string";
    }
}`,

    "getters-setters": `### 25. Getters & Setters (Accessors)
Getters and setters look like standard properties from the outside, but they run internal tracking functions under the hood to intercept reads or validate updates.

Code Example:
class User {
    constructor(name) { this._name = name; }
    get name() { return this._name.toUpperCase(); }
    set name(val) {
        if (val.length > 0) this._name = val;
    }
}`,

    "static-members": `### 26. Static Fields & Static Private Members
Static properties and methods attach directly to the main class constructor definition itself, rather than being copied onto instance instances created with the 'new' keyword.

Code Example:
class MathUtils {
    static #pi = 3.14159;
    static calculateArea(radius) {
        return this.#pi * radius * radius;
    }
}
console.log(MathUtils.calculateArea(5));`,

    "mvc-pattern": `### 27. Model-View-Controller (MVC) in Classes
A clean structural software design pattern splitting duties into distinct segments:

* **Model:** Handles raw application data storage and logic states.
* **View:** Manages DOM interface elements, layouts, and display rendering.
* **Controller:** Intercepts system events and acts as a bridge between Model and View updates.

Code Example:
class Model { constructor() { this.data = []; } }
class View { render(data) { } }
class Controller {
    constructor(m, v) { this.m = m; this.v = v; }
}`,

    "error-handling": `### 28. Robust Error Interception (try / catch / finally)
Gracefully handles crashes without freezing execution pipelines.

* **try:** Isolates risky execution code blocks.
* **catch:** Captures generated exception payloads (ReferenceError, TypeError, SyntaxError).
* **finally:** A cleanup block guaranteed to run regardless of whether an error occurred.

Code Example:
try {
    dangerousCode();
} catch (err) {
    console.error("Intercepted: " + err.name);
} finally {
    console.log("Cleanup operation absolute execution.");
}`,

    "advanced-oop": `### 29. Advanced Object Mutation & Deletion
* **Primitive Box wrappers:** JS converts plain strings temporary into wrapper objects automatically behind the scenes to let you call properties like '.length'.
* **delete operator:** Removes key-value attributes completely from active dynamic objects.

Code Example:
let item = { status: "active", id: 101 };
delete item.status; 
console.log(item);`,

    "context-this": `### 30. Execution Context ('this') & System Architecture
* **this:** References the object currently executing the function context.
* **Arrow functions:** Inherit 'this' lexically from their surrounding block rather than setting a unique dynamic execution context.
* **globalThis:** Unified access token targeting global scopes uniformly across browsers or Node environments.
* **Object.fromEntries():** Converts an array of key-value pairs into a standard object.

Code Example:
const pairs = [['a', 1], ['b', 2]];
const obj = Object.fromEntries(pairs);`,

    "object-cloning": `### 31. Object Reference Cloning & Composition
Objects store memory address reference references rather than literal raw value duplicates.

* **Shallow Copying:** Use spread operators ({...}) or Object.assign() to clone top-level attributes.
* **Deep Copying:** Use structuredClone() to deeply replicate nested object structures across distinct addresses.

Code Example:
let original = { x: 1, nested: { y: 2 } };
let shallow = { ...original };
let deep = structuredClone(original);`,

    "object-comparison": `### 32. Object Reference Comparison
Comparing separate object instances via (===) checks whether they share the exact same reference memory address, not if their properties look identical.

Code Example:
let first = { val: 5 };
let second = { val: 5 };
console.log(first === second);

let link = first;
console.log(first === link);`,

    "object-iterations": `### 33. Object Exploration Utilities
Global methods used to convert object internal layouts into standard iterable arrays.

* **Object.keys():** Returns an array of keys.
* **Object.values():** Returns an array of property values.
* **Object.entries():** Returns an array of nested key-value pairs ([key, value]).

Code Example:
const app = { title: "App", size: 800 };
console.log(Object.keys(app));
console.log(Object.values(app));`,

    "objects-in-functions": `### 34. Objects in Functions & Destructuring Parameters
Passing objects into function parameters allows you to clean up signatures using destructuring targets directly within the argument definitions.

Code Example:
function loadWindow({ width, height, fullscreen = false }) {
    console.log(\`Size: \${width}x\${height}. Fullscreen state: \${fullscreen}\`);
}
const config = { width: 800, height: 600 };
loadWindow(config);`,

    "factory-constructors": `### 35. Factory Functions & Constructor Instantiation
Alternative ways to spin up custom objects.

* **Constructor Function:** Legacy pattern running with the 'new' keyword to automatically bind instances to 'this'.

Code Example:
function SoundTrack(title) {
    this.title = title;
    this.play = function() { console.log("Playing " + this.title); };
}
const song = new SoundTrack("Birds of a Feather");`,

    "instanceof-operator": `### 36. Type Checking with instanceof
Verifies whether a specific target object inherits characteristics or belongs to a designated class or parent constructor hierarchy.

Code Example:
class Panel {}
const mainPanel = new Panel();

console.log(mainPanel instanceof Panel);
console.log(mainPanel instanceof Array);`,

    "prototypes": `### 37. JavaScript Prototype Architecture
Prototypes are the hidden engine mechanics behind JavaScript inheritance. Objects look up missing properties down a prototype chain link until they hit null.

Code Example:
const animal = { eats: true };
const rabbit = Object.create(animal);

console.log(rabbit.eats);`,

    "constructor-prototype": `### 38. Constructor Prototype Mechanics
Every constructor function shares a '.prototype' property object container. All instances generated via that constructor share access to methods declared inside that prototype pool.

Code Example:
function Device(name) { this.name = name; }
Device.prototype.turnOn = function() { console.log(this.name + " online."); };

const laptop = new Device("Laptop");
laptop.turnOn();`,

    "call-apply-bind": `### 39. Function Context Control: call, apply & bind
Explicitly forces or locks dynamic 'this' contexts onto designated targeted methods.

* **call():** Invokes functions instantly while accepting arguments separated by commas.
* **apply():** Invokes functions instantly while accepting arguments wrapped in a clean array.
* **bind():** Creates a clone function with a locked 'this' context ready for future execution.

Code Example:
function describe(tag) { console.log(\`\${tag}: \${this.name}\`); }
const contextObj = { name: "Pixel Application" };

describe.call(contextObj, "App Log");`,

    "property-descriptors": `### 40. Meta Property Architecture & Configuration Control
* **Object.create():** Generates clean objects while customizing chosen prototype baselines.
* **Property Descriptors:** Customizes security layers via internal flag descriptors (writable, enumerable, configurable).

Code Example:
const strictObj = {};
Object.defineProperty(strictObj, 'id', {
    value: 999,
    writable: false,
    enumerable: true,
    configurable: false
});`
};

const topicsChipsHTML = `
Here are all available topics:
<div class="chips-container">
    <div style="width: 100%; margin-top: 5px; font-weight: bold; font-size: 14px; text-transform: uppercase; color: var(--main-brown); opacity: 0.7;">— Beginner —</div>
    <button class="topic-chip" data-topic="javascript-intro"># js-intro</button>
    <button class="topic-chip" data-topic="html-integration"># html-integration</button>
    <button class="topic-chip" data-topic="browser-console"># console</button>
    <button class="topic-chip" data-topic="let-const"># let-const</button>
    <button class="topic-chip" data-topic="data-types"># data-types</button>
    <button class="topic-chip" data-topic="interpolation"># interpolation</button>
    <button class="topic-chip" data-topic="math-operations"># math-api</button>
    <button class="topic-chip" data-topic="logical-operators"># logical-ops</button>
    <button class="topic-chip" data-topic="ternary-nullish"># ternary-nullish</button>
    <button class="topic-chip" data-topic="if-else"># if-else</button>

    <div style="width: 100%; margin-top: 10px; font-weight: bold; font-size: 14px; text-transform: uppercase; color: var(--main-brown); opacity: 0.7;">— Intermediate —</div>
    <button class="topic-chip" data-topic="loops-all"># loops-all</button>
    <button class="topic-chip" data-topic="break-continue"># break-continue</button>
    <button class="topic-chip" data-topic="nested-loops"># nested-loops</button>
    <button class="topic-chip" data-topic="arrays-creation"># arrays-init</button>
    <button class="topic-chip" data-topic="spread-operator"># spread-op</button>
    <button class="topic-chip" data-topic="array-methods"># array-methods</button>
    <button class="topic-chip" data-topic="string-methods"># string-methods</button>
    <button class="topic-chip" data-topic="regex-methods"># regex-methods</button>
    <button class="topic-chip" data-topic="functions-basics"># functions-closures</button>
    <button class="topic-chip" data-topic="arrow-functions"># arrow-fns</button>

    <div style="width: 100%; margin-top: 10px; font-weight: bold; font-size: 14px; text-transform: uppercase; color: var(--main-brown); opacity: 0.7;">— Advanced —</div>
    <button class="topic-chip" data-topic="advanced-functions"># iife-recursion</button>
    <button class="topic-chip" data-topic="hoisting"># hoisting</button>
    <button class="topic-chip" data-topic="oop-classes"># oop-classes</button>
    <button class="topic-chip" data-topic="private-methods"># private-members</button>
    <button class="topic-chip" data-topic="getters-setters"># getters-setters</button>
    <button class="topic-chip" data-topic="static-members"># static-members</button>
    <button class="topic-chip" data-topic="mvc-pattern"># mvc-pattern</button>
    <button class="topic-chip" data-topic="error-handling"># try-catch</button>
    <button class="topic-chip" data-topic="advanced-oop"># advanced-oop</button>
    <button class="topic-chip" data-topic="context-this"># context-this</button>
    <button class="topic-chip" data-topic="object-cloning"># object-cloning</button>
    <button class="topic-chip" data-topic="object-comparison"># object-compare</button>
    <button class="topic-chip" data-topic="object-iterations"># object-utilities</button>
    <button class="topic-chip" data-topic="objects-in-functions"># object-params</button>
    <button class="topic-chip" data-topic="factory-constructors"># constructors</button>
    <button class="topic-chip" data-topic="instanceof-operator"># instanceof</button>
    <button class="topic-chip" data-topic="prototypes"># prototypes</button>
    <button class="topic-chip" data-topic="constructor-prototype"># proto-mechanics</button>
    <button class="topic-chip" data-topic="call-apply-bind"># call-apply-bind</button>
    <button class="topic-chip" data-topic="property-descriptors"># meta-properties</button>
</div>`;

const initialBotGreeting = `<p style="margin: 0 0 10px 0;">Hi there! I am your pixelated JS helper. Ask me about any JS topic (for example: "variables", "loops", "functions", "arrays", "objects"), and I will explain it in detail!</p><p style="margin: 0;">If you don't know where to start, type <strong>"help"</strong> to show all topics.</p>`;

const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const historyList = document.getElementById('history-list');
const newChatBtn = document.getElementById('new-chat-btn');

let chats = JSON.parse(localStorage.getItem('minichat_history')) || [];
let activeChatId = null;

init();

function init() {
    if (chats.length === 0) {
        createNewChat();
    } else {
        activeChatId = chats[0].id;
        renderSidebar();
        loadActiveChat();
    }
}

function saveToLocalStorage() {
    localStorage.setItem('minichat_history', JSON.stringify(chats));
}

function createNewChat() {
    const newChat = {
        id: Date.now(),
        title: "New Chat",
        messages: [
            { text: initialBotGreeting, className: 'bot-message' }
        ]
    };

    chats.unshift(newChat);
    activeChatId = newChat.id;
    saveToLocalStorage();
    renderSidebar();
    loadActiveChat();
}

function deleteChat(chatId) {
    chats = chats.filter(c => c.id !== chatId);
    
    if (chats.length === 0) {
        saveToLocalStorage();
        createNewChat();
    } else {
        if (activeChatId === chatId) {
            activeChatId = chats[0].id;
        }
        saveToLocalStorage();
        renderSidebar();
        loadActiveChat();
    }
}

function renderSidebar() {
    historyList.innerHTML = '';
    
    chats.forEach(chat => {
        const li = document.createElement('li');
        
        const chatItemDiv = document.createElement('div');
        chatItemDiv.classList.add('chat-item');
        if (chat.id === activeChatId) chatItemDiv.classList.add('active');

        const titleSpan = document.createElement('span');
        titleSpan.classList.add('chat-title-text');
        titleSpan.innerText = chat.title;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-chat-btn');
        deleteBtn.innerHTML = '✖';
        deleteBtn.title = 'Delete chat';

        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteChat(chat.id);
        });

        chatItemDiv.addEventListener('click', () => {
            if (activeChatId === chat.id) return;
            activeChatId = chat.id;
            renderSidebar();
            loadActiveChat();
        });

        chatItemDiv.appendChild(titleSpan);
        chatItemDiv.appendChild(deleteBtn);
        li.appendChild(chatItemDiv);
        historyList.appendChild(li);
    });
}

function loadActiveChat() {
    chatContainer.innerHTML = '';
    const activeChat = chats.find(c => c.id === activeChatId);
    if (!activeChat) return;

    activeChat.messages.forEach(msg => {
        appendMessageToDOM(msg.text, msg.className);
    });
}

newChatBtn.addEventListener('click', createNewChat);

sendBtn.addEventListener('click', handleSend);
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !userInput.disabled) handleSend();
});

chatContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('topic-chip')) {
        if (userInput.disabled) return;
        const selectedTopic = e.target.getAttribute('data-topic');
        sendTopic(selectedTopic);
    }
});

function sendTopic(topicName) {
    processUserMessage(topicName);
}

function handleSend() {
    const text = userInput.value.trim();
    if (text === '') return;

    userInput.value = '';
    processUserMessage(text);
}

function processUserMessage(text) {
    const activeChat = chats.find(c => c.id === activeChatId);
    
    if (activeChat.title === "New Chat") {
        activeChat.title = text;
        renderSidebar();
    }

    activeChat.messages.push({ text: text, className: 'user-message' });
    appendMessageToDOM(text, 'user-message');
    saveToLocalStorage();

    showTypingIndicator();
}

function appendMessageToDOM(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    
    if (className === 'bot-message' && (text.includes('chips-container') || text.includes('Hi there!'))) {
        messageDiv.innerHTML = text;
    } else {
        messageDiv.innerText = text;
    }
    
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    return messageDiv;
}

function setInterfaceDisabled(status) {
    userInput.disabled = status;
    sendBtn.disabled = status;
}

function showTypingIndicator() {
    setInterfaceDisabled(true);
    const tempMessage = appendMessageToDOM('Hmm, thinking...', 'bot-message');
    
    setTimeout(() => {
        tempMessage.remove();
        generateBotResponse();
    }, 1200);
}

function generateBotResponse() {
    const activeChat = chats.find(c => c.id === activeChatId);
    const userMessages = activeChat.messages.filter(m => m.className === 'user-message');
    
    if (userMessages.length === 0) return;

    const lastUserText = userMessages[userMessages.length - 1].text
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .trim();

    if (lastUserText === 'help') {
        activeChat.messages.push({ text: topicsChipsHTML, className: 'bot-message' });
        saveToLocalStorage();
        appendMessageToDOM(topicsChipsHTML, 'bot-message');
        setInterfaceDisabled(false);
        return;
    }

    const topicKeywords = {
        "javascript-intro": ["js", "javascript", "intro", "what is js"],
        "html-integration": ["html", "script", "dom"],
        "browser-console": ["console", "log", "debug"],
        "let-const": ["let", "const", "var", "variable", "variables"],
        "data-types": ["data type", "data types", "primitive", "string", "number", "boolean"],
        "interpolation": ["interpolation", "template literal", "backtick"],
        "math-operations": ["math", "calculator", "operator", "operators"],
        "logical-operators": ["logical", "and", "or", "not"],
        "ternary-nullish": ["ternary", "nullish"],
        "if-else": ["if", "else", "condition", "conditional"],
        "loops-all": ["loop", "loops", "for", "while"],
        "break-continue": ["break", "continue"],
        "nested-loops": ["nested loop", "nested loops"],
        "arrays-creation": ["array", "arrays", "arrays-init"],
        "spread-operator": ["spread", "spread operator"],
        "array-methods": ["array method", "array methods", "map", "filter", "reduce", "push", "pop"],
        "string-methods": ["string method", "string methods"],
        "regex-methods": ["regex", "regexp", "regular expression"],
        "functions-basics": ["function", "functions", "closure", "closures"],
        "arrow-functions": ["arrow function", "arrow functions", "arrow"],
        "advanced-functions": ["iife", "recursion"],
        "hoisting": ["hoisting"],
        "oop-classes": ["class", "classes", "oop", "object oriented"],
        "private-methods": ["private", "private method", "private field"],
        "getters-setters": ["getter", "getters", "setter", "setters"],
        "static-members": ["static"],
        "mvc-pattern": ["mvc", "model view controller"],
        "error-handling": ["try", "catch", "try catch", "error"],
        "advanced-oop": ["delete operator", "box wrappers"],
        "context-this": ["this", "context", "globalthis"],
        "object-cloning": ["clone", "cloning", "structuredclone", "shallow copy", "deep copy"],
        "object-comparison": ["object compare", "object comparison"],
        "object-iterations": ["object keys", "object values", "object entries"],
        "objects-in-functions": ["destructuring", "object params"],
        "factory-constructors": ["constructor", "constructors", "factory"],
        "instanceof-operator": ["instanceof"],
        "prototypes": ["prototype", "prototypes", "proto"],
        "constructor-prototype": ["constructor prototype"],
        "call-apply-bind": ["call", "apply", "bind"],
        "property-descriptors": ["property descriptors", "defineproperty"]
    };

    let matchedTopicKey = null;

    if (jsTopics[lastUserText]) {
        matchedTopicKey = lastUserText;
    } else {
        for (const [topicKey, keywords] of Object.entries(topicKeywords)) {
            const hasMatch = keywords.some(keyword => lastUserText.includes(keyword));
            if (hasMatch) {
                matchedTopicKey = topicKey;
                break;
            }
        }
    }

    let reply = matchedTopicKey 
        ? jsTopics[matchedTopicKey] 
        : "Hmm, I don't know that topic yet. Try asking about: 'variables', 'functions', 'loops', 'objects', or type 'help' to see all topics.";

    const botMessageElement = appendMessageToDOM('', 'bot-message');
    typeText(botMessageElement, reply, () => {
        activeChat.messages.push({ text: reply, className: 'bot-message' });
        saveToLocalStorage();
    });
}

function typeText(element, text, onComplete) {
    let index = 0;
    const speed = 15;

    function type() {
        if (index < text.length) {
            element.innerText += text.charAt(index);
            index++;
            chatContainer.scrollTop = chatContainer.scrollHeight;
            setTimeout(type, speed);
        } else {
            setInterfaceDisabled(false);
            if (onComplete) onComplete();
        }
    }
    type();
}