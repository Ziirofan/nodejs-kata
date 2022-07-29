import { magazines, magazine, magazineByIsbn, createMagazine } from "./service.js";

export const magazinesResolvers = {
    Query: {
      magazines: async () => { return await magazines()},
      magazine: async (parent, {id}) => { return await magazine(id)},
      magazineByIsbn: async (parent, {isbn}) => { return await magazineByIsbn(isbn)},
    },
    Mutation: {
        createMagazine: async (parent, {newMagazine}) => { return await createMagazine(newMagazine)}
    }
  };