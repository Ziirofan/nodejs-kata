import { describe, it, beforeEach } from "mocha";
import { expect } from "chai";
import { magazines, magazineByIsbn, createMagazine } from "./service.js";
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
    mongoose.connection.collections.magazines.deleteOne({isbn:"784-456-456"},() => {
        done();
    });
});

describe('Magazine service test', function () {
        it('Should return array of magazine not empty', async () => {
            const result = await magazines();
            expect(result).to.have.lengthOf(6);
             
        })
        it('Should return magazine by isbn', async () => {
            const result = await magazineByIsbn("2365-5632-7854")
            expect(result).to.include({
                title: 'Cooking for gourmets',
                isbn: '2365-5632-7854',
                publishedAt: '01.05.2012'
              });
        })
        it('Should add new document to magazine collection', async () => {
            const magazineTest = {
                title: 'test',
                isbn: '784-456-456',
                authors: 'test@email.com',
                publishedAt: '01.05.2012'
            }
            await createMagazine(magazineTest)
            const result = await magazineByIsbn("784-456-456")
            expect(result).to.include(magazineTest)
            return result;
        })
})