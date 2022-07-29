import { describe, it, beforeEach } from "mocha";
import { expect } from "chai";
import { books, bookByIsbn, createBook } from "./service.js";
import { mongoose } from "mongoose";

// tells mongoose to use ES6 implementation of promises
mongoose.Promise = global.Promise;
const MONGODB_URI = 'mongodb://localhost:27017/test';
mongoose.connect(MONGODB_URI);

mongoose.connection
	.once('open', () => console.log('Connected!'))
	.on('error', (error) => {
		console.warn('Error : ', error);
	});

beforeEach((done) => {
    mongoose.connection.collections.books.deleteOne({isbn:"784-456-456"},() => {
        done();
    });
});

describe('Book service test', function () {
        it('Should return array of book not empty', async () => {
            const result = await books();
            expect(result).to.have.lengthOf(8);
             
        })
        it('Should return book by isbn', async () => {
            const result = await bookByIsbn("2221-5548-8585")
            expect(result).to.include({
                title: 'Das Perfekte Dinner. Die besten Rezepte',
                authors: 'null-lieblich@echocat.org'
              });
        })
        it('Should add new document to book collection', async () => {
            const bookTest = {
                title: "test",
                isbn: "784-456-456",
                authors: "test@email.com",
                description: "null"
            }
            await createBook(bookTest)
            const result = await bookByIsbn("784-456-456")
            expect(result).to.include(bookTest)
            return result;
        })
})