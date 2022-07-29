import { booksResolvers } from "./bookModule/resolver.js";
import { authorsResolvers } from "./AuthorModule/resolvers.js";
import { magazinesResolvers } from "./MagazineModule/resolvers.js";

const rootResolver = {};
export const resolvers = [
    rootResolver,
    booksResolvers,
    authorsResolvers,
    magazinesResolvers
  ];