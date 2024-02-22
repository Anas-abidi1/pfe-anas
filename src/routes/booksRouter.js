const express =  require ('express');
const { createmedecin, createBook } = require('../controllers/bookControllers');

const router = express.Router()

router.get('/', (req,res)=> {
    res.json('all Book');
});
router.get('/:bookId', (req,res)=> {
    res.json('single Books');
});
router.post('/', createBook);
router.put('/', (req,res)=> {
    res.json('Book updated');
});
router.delete('/:bookId', (req,res)=> {
    res.json('Book Deleted');
});

module.exports = router