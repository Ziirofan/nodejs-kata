import { books, book, createBook } from "./service.js";

export const booksResolvers = {
    Query: {
      books: ({title}, {isbn}, {authors}) => books(title, isbn, authors),
      book: ({id}) => book(id),
    },
    Mutation: {
        createBook: ({newBook}) => createBook(newBook)
    }
  };