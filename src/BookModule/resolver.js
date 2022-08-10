import { books, book, bookByIsbn, booksByAuthor, createBook } from "./service.js";

export const booksResolvers = {
    Query: {
      books,
      book: (_, {id}) => book(id),
      bookByIsbn:(_, {isbn}) => bookByIsbn(isbn)
    },
    Mutation: {
        createBook: (_, {newBook}) => createBook(newBook)
    }
  };