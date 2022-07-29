import { books, book, bookByIsbn, booksByAuthor, createBook } from "./service.js";

export const booksResolvers = {
    Query: {
      books: async () => { return await books()},
      book: async (parent, {id}) => { return await book(id)},
      bookByIsbn: async (parent, {isbn}) => { return await bookByIsbn(isbn)}
    },
    Mutation: {
        createBook: async (parent, {newBook}) => { return await createBook(newBook)}
    }
  };