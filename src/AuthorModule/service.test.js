/* The above code is testing the author service. */
import { describe, it, beforeEach } from "mocha";
import { expect } from "chai";
import { authors, authorsByEmail, authorsBook, createAuthor } from "./service.js";
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
    mongoose.connection.collections.authors.deleteOne({email:"test@email.com"},() => {
        done();
    });
});

describe('Author service test', function () {
        it('Should return array of authors not empty', async () => {
            const result = await authors();
            expect(result).to.have.lengthOf(6);
             
        })
        it('Should return book of author', async () => {
            const result = await authorsBook("null-rabe@echocat.org");
            expect(result).to.have.lengthOf(2);
        })
        it('Should add new document to author collection', async () => {
            await createAuthor({
                firstname: "test",
                lastname: "test",
                email: "test@email.com"
            })
            const result = await authorsByEmail("test@email.com")
            expect(result).to.have.lengthOf(1);
            return result;
        })
})