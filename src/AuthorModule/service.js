import AuthorModel from './model/schemaAuthor.js';
import { ExceptionNotFound, ExceptionRequestError } from '../utils/errorHandler.js';

export const authors = async () => {
    try{
        const author = await AuthorModel.find().exec()
        if(author.length === 0){
            throw new ExceptionNotFound("Author not found");
        }
        return author;
    }
    catch(e){
        console.error(e);
        throw e;
    }
}

export const authorsByEmail = async ( email ) => {
    try{
        const author = await AuthorModel.find({email}).exec()
        if(author.length === 0){
            throw new ExceptionNotFound("Author not found");
        }
        return author;
    }
    catch(e){
        console.error(e);
        throw e;
    }
}

export const authorsBook = async ( email ) => {
    try{
        const authorId = await AuthorModel.findOne({email}).exec()
        if(!authorId){
            throw new ExceptionNotFound("Author not found");
        }
        const books = await books({authorId});
        return books
    }
    catch(e){
        console.error(e);
        throw e;
    }
}

export const createAuthor = async (authorData) => {
    try{
        const newAuthor = new AuthorModel(authorData);
        const resQuery = await newAuthor.save()
        return resQuery
    }
    catch(e){
        console.error(e);
        throw e;
    }
}