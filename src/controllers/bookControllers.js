const BookModel = require('../models/bookModel');
const createBook = async(req,res)=> {
const {title,author}= req.body;

const newBook =await BookModel.create({title,author});
res.json(newBook);
};
  
module.exports={
    createBook,
    
};

