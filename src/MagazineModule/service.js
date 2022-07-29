import MagazineModel from './model/schemaMagazine.js';
import { ExceptionNotFound, ExceptionRequestError } from '../utils/errorHandler.js';

export const magazines = async () => {
    try{
        const magazine = await MagazineModel.find().exec()
        if(magazine.length === 0){
            throw new ExceptionNotFound("Magazine not found");
        }
        return magazine;
    }
    catch(e){
        console.error(e);
        throw e;
    }
}

export const magazine = async (id) => {
    try{
        if(typeof id != 'number')
            throw new ExceptionRequestError("Id must be number")
        
        const magazine = await MagazineModel.findOne({id}).exec()
        if(magazine.length === 0){
            throw new ExceptionNotFound("Magazine not found");
        }
        return magazine;
    }
    catch(e){
        console.error(e);
        throw e;
    }
}

export const magazineByIsbn = async (isbn) => {
    try{
        if(typeof isbn != 'string')
            throw new ExceptionRequestError("Isbn must be string")
        
        const magazine = await MagazineModel.findOne({isbn}).exec()
        if(magazine.length === 0){
            throw new ExceptionNotFound("Magazine not found");
        }
        return magazine;
    }
    catch(e){
        console.error(e);
        throw e;
    }
}

export const magazinesByAuthor = async (author) => {
    try{
        if(typeof author != 'string')
            throw new ExceptionRequestError("Author must be string")
        
        const magazine = await MagazineModel.find({author}).exec()
        if(magazine.length === 0){
            throw new ExceptionNotFound("Magazine not found");
        }
        return magazine;
    }
    catch(e){
        console.error(e);
        throw e;
    }
}

export const createMagazine = async (magazineData) => {
    try{
        const newMagazine = new MagazineModel(magazineData);
        const resQuery = await newMagazine.save()
        return resQuery
    }
    catch(e){
        console.error(e);
        throw e;
    }
}