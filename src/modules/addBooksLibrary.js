const fs = require("fs");
const path = require("path");
const books = require("../data/library.json");

const addBooksLibrary = (id) => {
 
  const BookFind = books.find((book) => book.id === id);

};

module.exports = addBooksLibrary;