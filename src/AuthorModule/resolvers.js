import { authors, authorsBook, createAuthor } from "./service.js";

export const authorsResolvers = {
    Query: {
      authors,
      booksByAuthor: (_, {email}) => authorsBook(email)
    },
    Mutation: {
        createAuthor: (_, {newAuthor}) => createAuthor(newAuthor)
    }
  };