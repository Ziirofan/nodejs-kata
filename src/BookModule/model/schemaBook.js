import mongoose from 'mongoose';
const { Schema } = mongoose;

const BookSchema = new Schema({
    title: String,
    isbn: String,
    authors: String,
    description: String,
})

export default mongoose.models.books || mongoose.model('books', BookSchema, 'books');