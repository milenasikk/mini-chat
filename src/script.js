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
userScore = 120; // Perfect, it's reassignable!

const birthYear = 2010;
// birthYear = 2011; // Throws a TypeError!`,

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
let blankData; // value is undefined
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
let root = Math.sqrt(16); // 4
let power = Math.pow(2, 3); // 8
let absolute = Math.abs(-9); // 9`,

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
let status = userAge >= 18 ? "Adult" : "Minor"; // Minor

let inputName = null;
let profileName = inputName ?? "Guest User"; // Guest User`,

    "if-else": `### 10. Conditional Branches (if / else / else if)
Directs the structural flow of execution paths matching specific conditional statements.

Code Example:
let appRating = 4.5;

if (appRating >= 4.8) {
    console.log("Masterpiece");
} else if (appRating >= 4.0) {
    console.log("Great Application"); // Triggers this route!
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
    if (num === 3) continue; // skips printing 3
    if (num === 5) break;    // stops loop completely
    console.log(num); // 1, 2, 4
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
let constructed = new Array(5); // array with 5 empty items
let parsed = Array.from("JS"); // ['J', 'S']`,

    "spread-operator": `### 15. The Spread Operator (...)
Unpacks individual elements out of an array or properties out of an object. Excellent for duplication and combinations.

Code Example:
const source = [1, 2];
const combined = [...source, 3, 4]; // [1, 2, 3, 4]

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
let filtered = numbers.filter(n => n > 2); // [3, 4]
let multiplied = numbers.map(n => n * 2); // [2, 4, 6, 8]`,

    "string-methods": `### 17. String Manipulation Methods
Text operations are built directly into standard JavaScript string types.

* **Case conversion:** toLowerCase(), toUpperCase()
* **Extraction:** slice(), substring(), split()
* **Trimming:** trim(), trimStart(), trimEnd()
* **Checks:** includes(), startsWith(), endsWith(), indexOf()
* **Formatting:** replace(), replaceAll(), padStart(), padEnd()

Code Example:
let raw = "   Electron App   ";
let cleaned = raw.trim().toLowerCase(); // "electron app"
let parts = cleaned.split(" "); // ["electron", "app"]`,

    "regex-methods": `### 18. Regular Expressions (RegExp)
Pattern matching tools used to validate data strings or find/replace values.

* **Patterns:** \\d (digits), \\D (non-digits), \\w (word alphanumeric), \\s (whitespace), . (any character).
* **Methods:** test() (boolean check), exec(), match(), replace(), search(), split().
* **Groups & Assertions:** Parentheses () create matching groups.

Code Example:
let pattern = /\\d{3}/; // checks for 3 digits in a row
let check = pattern.test("ABC-123"); // true
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
        return count; // closure holds access to 'count'
    };
}
const counter = makeCounter();
console.log(counter()); // 1`,

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
    if (n <= 1) return 1; // base exit condition
    return n * factorial(n - 1); // recursive execution
}`,

    "hoisting": `### 22. Variable & Function Hoisting
Hoisting is a behavior in JavaScript where variable and function declarations are mentally lifted to the top of their compilation scopes before execution.

* **Function declarations:** Completely hoisted; you can invoke them before they appear in the source.
* **let & const:** Hoisted but kept in a "Temporal Dead Zone" (TDZ). Calling them early throws a ReferenceError.

Code Example:
sayHi(); // Works perfectly!
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
    static #pi = 3.14159; // static private variable
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
class View { render(data) { /* updates screen layout */ } }
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
console.log(item); // { id: 101 }`,

    "context-this": `### 30. Execution Context ('this') & System Architecture
* **this:** References the object currently executing the function context.
* **Arrow functions:** Inherit 'this' lexically from their surrounding block rather than setting a unique dynamic execution context.
* **globalThis:** Unified access token targeting global scopes uniformly across browsers or Node environments.
* **Object.fromEntries():** Converts an array of key-value pairs into a standard object.

Code Example:
const pairs = [['a', 1], ['b', 2]];
const obj = Object.fromEntries(pairs); // {a: 1, b: 2}`,

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
console.log(first === second); // false (separate memory addresses)

let link = first;
console.log(first === link); // true (points to the exact same reference location)`,

    "object-iterations": `### 33. Object Exploration Utilities
Global methods used to convert object internal layouts into standard iterable arrays.

* **Object.keys():** Returns an array of keys.
* **Object.values():** Returns an array of property values.
* **Object.entries():** Returns an array of nested key-value pairs ([key, value]).

Code Example:
const app = { title: "App", size: 800 };
console.log(Object.keys(app)); // ["title", "size"]
console.log(Object.values(app)); // ["App", 800]`,

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

console.log(mainPanel instanceof Panel); // true
console.log(mainPanel instanceof Array); // false`,

    "prototypes": `### 37. JavaScript Prototype Architecture
Prototypes are the hidden engine mechanics behind JavaScript inheritance. Objects look up missing properties down a prototype chain link until they hit null.

Code Example:
const animal = { eats: true };
const rabbit = Object.create(animal);

console.log(rabbit.eats); // true (inherited via the prototype chain)`,

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
    writable: false,      // read-only property value lock
    enumerable: true,     // shows up in loops
    configurable: false   // cannot be deleted or reconfigured
});`
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