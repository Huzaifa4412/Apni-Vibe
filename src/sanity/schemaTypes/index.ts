import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import customer from './customer'
import comments from './comments'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, customer, comments],
}
