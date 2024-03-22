import { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'
dotenv.config()

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://graphql.datocms.com': {
        headers: {
          Authorization: `${process.env['DATO_TOKEN']}`,
        },
      },
    },
  ],
  documents: ['./src/api/schemas/**/*.graphql'],
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
  generates: {
    'src/types/_generated/graphql-types.ts': {
      plugins: [
        // {
        // add: {
        //   content:
        //     '// eslint-disable-next-line @typescript-eslint/ban-ts-comment',
        // },
        // },
        // { add: { content: '// @ts-nocheck' } },
        'typescript',
        'typescript-operations',
        'typed-document-node',
      ],
      config: {
        dedupeFragments: true,
      },
    },
    'src/types/_generated/graphql-schema.json': {
      plugins: ['introspection'],
    },
    'src/types/_generated/fragment-types.ts': {
      plugins: ['fragment-matcher'],
    },
  },
}
export default config
