'use strict';

// Buttons & Elements
const addBookBtn = document.querySelector('#add-book-btn');
const showBookInfoBtn = document.querySelector('#show-book-info-btn');
const bookInfoSection = document.querySelector('#book-info-section');
const form = document.querySelector('form');

// Book Collection Array
const myLibrary = [];

// Constructor Function
function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  this.uniqueID = crypto.randomUUID();
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
    'You attempted to change the read status of ID # ',
    this.uniqueID,
  );
  console.log('New read status: ', this.hasRead);
  console.log('New book collection: ', myLibrary);
};

// Other Functions
function toggleForm() {
  form.classList.toggle('hidden');
}

function addBookToLibrary(title, author, pages, hasRead) {
  event.preventDefault();
  title = document.querySelector('#title').value;
  author = document.querySelector('#author').value;
  pages = document.querySelector('#pages').value;
  hasRead = document.querySelector('#hasRead').checked;
  // const uniqueID = crypto.randomUUID();
  const newBook = new Book(title, author, pages, hasRead);
  myLibrary.push(newBook);
  const newDiv = document.createElement('p');
  const readSpan = document.createElement('span');
  newDiv.textContent = `Book title: ${title}, Book author: ${author}, Number of pages: ${pages}, `;
  readSpan.textContent = `Has read: ${hasRead}.`;
  bookInfoSection.appendChild(newDiv);
  newDiv.appendChild(readSpan);
  const changeReadStatusBtn = document.createElement('button');
  changeReadStatusBtn.textContent = 'Change read status';
  newDiv.appendChild(changeReadStatusBtn);
  changeReadStatusBtn.addEventListener('click', function () {
    newBook.changeReadStatus();
    readSpan.textContent = `Has read: ${newBook.hasRead}.`;
  });
  const removeEntryBtn = document.createElement('button');
  removeEntryBtn.textContent = 'Remove This Entry';
  newDiv.appendChild(removeEntryBtn);
  removeEntryBtn.addEventListener('click', () => {
    const index = myLibrary.indexOf(newBook);
    if (index > -1) {
      myLibrary.splice(index, 1);
      newDiv.remove();
      readSpan.remove();
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

// Global Event Listeners
addBookBtn.addEventListener('click', toggleForm);
showBookInfoBtn.addEventListener('click', showBookInfo);
form.addEventListener('submit', addBookToLibrary);
