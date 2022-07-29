import BookModel from './model/schemaBook.js';
import { ExceptionNotFound, ExceptionRequestError } from '../utils/errorHandler.js';

export const books = async () => {
    try{
        const book = await BookModel.find().exec()
        if(book.length === 0){
            throw new ExceptionNotFound("Book not found");
        }
        return book;
    }
    catch(e){
        console.error(e);
        throw e;
    }
}

export const book = async (id) => {
    try{
        if(typeof id != 'string')
            throw new ExceptionRequestError("Id must be string")
        
        const book = await BookModel.findOne({id}).exec()
        if(book.length === 0){
            throw new ExceptionNotFound("Book not found");
        }
        return book;
    }
    catch(e){
        console.error(e);
        throw e;
    }
}


export const bookByIsbn = async (isbn) => {
    try{
        if(typeof isbn != 'string')
            throw new ExceptionRequestError("Isbn must be string")
        
        const book = await BookModel.findOne({isbn}).exec()
        if(book.length === 0){
            throw new ExceptionNotFound("Book not found");
        }
        return book;
    }
    catch(e){
        console.error(e);
        throw e;
    }
}

export const booksByAuthor = async (author) => {
    try{
        if(typeof author != 'object')
            throw new ExceptionRequestError("Author must be an object")
        const book = await BookModel.find({authors: {$regex: author.email}}).exec()
        if(book.length === 0){
            throw new ExceptionNotFound("Book not found");
        }
        return book;
    }
    catch(e){
        console.error(e);
        throw e;
    }
}

export const createBook = async (bookData) => {
    try{
        const newBook = new BookModel(bookData);
        const resQuery = await newBook.save()
        return resQuery
    }
    catch(e){
        console.error(e);
        throw e;
    }
}