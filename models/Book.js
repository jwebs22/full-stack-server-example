const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

// create a schema for a book.
// fields: title, isbn, author, description, published_date,
// publisher, updated_date
const BookSchema =  new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4()
    },
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    published_date: {
        type: Date
    }, 
    publisher: {
        type: String 
    },
    update_date: {
        type: Date,
        default: Date.now
    }
})

//this line can also be written as two lines,
// writing this way allows not to have to define a variable Book
module.exports = Book = mongoose.model('book', BookSchema)