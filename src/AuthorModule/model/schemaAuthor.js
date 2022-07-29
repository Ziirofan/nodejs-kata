import mongoose from 'mongoose';
const { Schema } = mongoose;

const AuthorSchema = new Schema({
    email: String,
    firstname: String,
    lastname: String,
})

export default mongoose.models.authors || mongoose.model('authors', AuthorSchema, 'authors');