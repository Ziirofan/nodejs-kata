import mongoose from 'mongoose';
const { Schema } = mongoose;

const MagazineSchema = new Schema({
    title: String,
    isbn: String,
    authors: String,
    publishedAt: String,
})

export default mongoose.models.magazines || mongoose.model('magazines', MagazineSchema, 'magazines');