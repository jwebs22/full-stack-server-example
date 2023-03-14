const express = require('express');
//use router to define routes in express
const router = express.Router();

//load book model 
const Book = require('../../models/Book')

// test route, to make sure API routing is running 
router.get('/test', (req,res) => res.send("book route testing"))


//CRUD OPERATIONS TO COMMUNICATE WITH MONGODB

// show all the books (READ)
router.get('/', (req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({
        nobooksfound: 'no books found'
    }))
})

//find by id (READ)
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({nobookfound: "no book found"}))
} )

// add a new book (CREATE)
router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({msg: 'Book added successfully'}))
        .catch(err => res.status(400).json({error: err}))
})


// delete a new book (DELETE)
router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id, req.body)
    .then(book => res.json({msg: 'Book entry deleted successfully'}))
    .catch(err => res.status(404).json({error: 'No such book'}))
})

// update a new book (UPDATE)
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'updated successfully'}))
    .catch(err => 
        res.status(400).json({error: 'Unable to update the Database'})
    );
})

module.exports = router;