import { join } from 'path';

import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';

const resolversArray = loadFilesSync(join('./**/*.resolver.ts'), {
  recursive: true,
});

export const resolvers = mergeResolvers(resolversArray);