import BookModel from './model/schemaBook.js';
import { ExceptionNotFound, ExceptionRequestError } from '../utils/errorHandler.js';


export const books = async (title, isbn, authors) => {
    try{
        const query = {}
        if(title)
            query.title = title
        if(isbn)
            query.isbn = isbn
        if(authors)
            query.authors = authors
        const book = await BookModel.find(query).exec()
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


export const createBook = async (bookData) => {
    try{
        const data = {
            title: bookData.title,
            isbn: bookData.isbn,
            authors: bookData.authors.split(','),
            description: bookData.description,
        }
        const newBook = new BookModel(data);
        const resQuery = await newBook.save()
        return resQuery
    }
    catch(e){
        console.error(e);
        throw e;
    }
}