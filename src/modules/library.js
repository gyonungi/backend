const fs = require('fs');
const path = require('path');

const getBooks = () =>{
    const filePath = path.join(__dirname, '../data/library.json')
    return fs.readFileSync(filePath)
}

module.exports = getBooks;