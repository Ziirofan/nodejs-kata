import { authors, authorsBook, createAuthor } from "./service.js";

export const authorsResolvers = {
    Query: {
      authors: async () => { return await authors()},
      booksByAuthor: async (parent, {email}) => { return await authorsBook(email)}
    },
    Mutation: {
        createAuthor: async (parent, {newAuthor}) => { return await createAuthor(newAuthor)}
    }
  };