'use strict';

// const book = {
//   title: '',
//   author: '',
//   pages: '',
//   // hasRead:
// };

// const myLibrary = [];

// function Book(title, author, pages, hasRead) {
//   // the constructor...
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   // this.hasRead = hasRead;
// }

// const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295');

// console.log(book1);

// function addBookToLibrary() {
//   // take params, create a book then store it in the array
// }

// function iterateThroughBooks() {
//   for (let i = 0; i < myLibrary.length; i++) {
//     showBookInfo.textContent += myLibrary[i];
//   }
// }

// showBookInfoBtn.addEventListener('click', iterateThroughBooks);

// console.log(Object.getPrototypeOf(book));
// console.log(book);

// this.info = function () {
//   const haveTheyRead = hasRead ? `read` : `not read yet`;
//   return `${this.title} by ${this.author}, ${this.pages} pages, ${haveTheyRead}.`;
// };

// book.info();

// const playerOne = {
//   name: 'tim',
//   marker: 'X',
// };

// const playerTwo = {
//   name: 'jenn',
//   marker: 'O',
// };

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
// }

// const player = new Player('steve', 'X');
// console.log(player.name); // "steve"

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function () {
//     console.log(this.name);
//   };
// }

// const player1 = new Player('steve', 'X');
// const player2 = new Player('also steve', 'O');
// player1.sayName(); // logs "steve"
// player2.sayName(); // logs "also steve"

// Object.getPrototypeOf(player1) === Player.prototype; // returns true
// Object.getPrototypeOf(player2) === Player.prototype; // returns true

// Initialize constructor functions
// function Hero(name, level) {
//   this.name = name;
//   this.level = level;
// }

// function Warrior(name, level, weapon) {
//   Hero.call(this, name, level);
//   this.weapon = weapon;
// }

// function Healer(name, level, spell) {
//   Hero.call(this, name, level);
//   this.spell = spell;
// }

// // Link prototypes and add prototype methods
// Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
// Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// Hero.prototype.greet = function () {
//   return `${this.name} says hello.`;
// };

// Warrior.prototype.attack = function () {
//   return `${this.name} attacks with the ${this.weapon}.`;
// };

// Healer.prototype.heal = function () {
//   return `${this.name} casts ${this.spell}.`;
// };

// // Initialize individual character instances
// const hero1 = new Warrior('Bjorn', 1, 'axe');
// const hero2 = new Healer('Kanin', 1, 'cure');

// Buttons & Elements
const addBookBtn = document.querySelector('#add-book-btn');
const showBookInfoBtn = document.querySelector('#show-book-info-btn');
const bookInfoSection = document.querySelector('#book-info-section');
const form = document.querySelector('form');
const submitFormBtn = document.querySelector('#submitIt');

// Book Collection Array
const myLibrary = [];

// Constructor Function
function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  this.info = function () {
    const haveTheyRead = this.hasRead ? 'already read' : 'has not read';
    return `${this.title} by ${this.author}, ${this.pages} pages, ${haveTheyRead}`;
  };
}

// Prototype Function
Book.prototype.changeReadStatus = function () {
  if (this.hasRead === true) {
    this.hasRead = false;
  } else {
    this.hasRead = true;
  }
  console.log(
    `You attempted to change the read status of ID # ${this.uniqueID}.`,
  );
  console.log(`New read status: ${this.hasRead}.`);
  console.log(`New book collection: ${myLibrary}.`);
};

// Book.prototype.removeEntry = function () {
//   myLibrary.splice(newBook);
//   console.log(`You attempted to remove the entry of ID # ${this.uniqueID}. `);
//   console.log(`New book collection: ${myLibrary}.`);
// };

// Other Functions
function toggleForm() {
  form.classList.toggle('hidden');
}

function addBookToLibrary(title, author, pages, hasRead) {
  // take params, create a book then store it in the array
  event.preventDefault();
  title = document.querySelector('#title').value;
  author = document.querySelector('#author').value;
  pages = document.querySelector('#pages').value;
  hasRead = document.querySelector('#hasRead').checked;
  const uniqueID = crypto.randomUUID();
  const newBook = new Book(title, author, pages, hasRead);
  myLibrary.push(newBook);
  // bookInfoSection.textContent = myLibrary;
  const newDiv = document.createElement('div');
  newDiv.textContent = `Book title: ${title}, Book author: ${author}, Number of pages: ${pages}, Has read: ${hasRead}.`;
  // newDiv.textContent = this.info();
  bookInfoSection.appendChild(newDiv);
  const changeReadStatusBtn = document.createElement('button');
  changeReadStatusBtn.textContent = 'Change read status';
  newDiv.appendChild(changeReadStatusBtn);
  changeReadStatusBtn.addEventListener('click', () =>
    newBook.changeReadStatus(),
  );
  const removeEntryBtn = document.createElement('button');
  removeEntryBtn.textContent = 'Remove This Entry';
  newDiv.appendChild(removeEntryBtn);
  removeEntryBtn.addEventListener('click', () => {
    const index = myLibrary.indexOf(newBook);
    if (index > -1) {
      myLibrary.splice(index, 1);
      newDiv.remove(); // also remove from DOM
    }
    console.log(`You attempted to remove the entry of ID # ${this.uniqueID}. `);
    console.log(`New book collection: ${myLibrary}.`);
  });
  console.log('new submission!');
  console.log(myLibrary);
  form.reset();
  toggleForm();
}

function showBookInfo() {
  if (bookInfoSection.classList.contains('hidden')) {
    bookInfoSection.classList.remove('hidden');
    bookInfoSection.classList.add('flex');
    bookInfoSection.classList.add('column');
  } else {
    bookInfoSection.classList.remove('flex');
    bookInfoSection.classList.remove('column');
    bookInfoSection.classList.add('hidden');
  }
}

// Event Listeners
addBookBtn.addEventListener('click', toggleForm);
showBookInfoBtn.addEventListener('click', showBookInfo);
submitFormBtn.addEventListener('click', addBookToLibrary);

// Console Logs
console.log(myLibrary);
console.log(myLibrary);
console.log(myLibrary);

// console.log(myLibrary);
// addBookToLibrary('Star Wars', 'Some Guy', 400, true);
// console.log(myLibrary);
// addBookToLibrary('test1', 'test2', 100, false);
// console.log(myLibrary);

// Instance Object
// const harryPotter = new Book('Harry Potter', 'J.K. Rowling', 300, true);
// console.log(myLibrary);
// console.log(Book);

// const arr = [];

// function pushToArray(value) {
//   arr.push(value);
// }

// console.log(arr);
// pushToArray(3);
// console.log(arr);

// Book.prototype.readMeNow = function () {
//   return `Hi! I am a book.`;
// };

// console.log(harryPotter.readMeNow());
// console.log(harryPotter.readMeNowAgain());

// console.log(harryPotter);
// console.log(harryPotter.info());
// console.log(Object.getPrototypeOf(Book));
// console.log(Object.getPrototypeOf(harryPotter));
// console.log(Object.getPrototypeOf(harryPotter) === Book.prototype);
