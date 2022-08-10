import { magazines, magazine, magazineByIsbn, createMagazine } from "./service.js";

export const magazinesResolvers = {
    Query: {
      magazines,
      magazine: (_, {id}) => magazine(id),
      magazineByIsbn: (_, {isbn}) => magazineByIsbn(isbn),
    },
    Mutation: {
        createMagazine:(_, {newMagazine}) => createMagazine(newMagazine)
    }
  };