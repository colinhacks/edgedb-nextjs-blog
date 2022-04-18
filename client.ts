import { createClient } from 'edgedb'
import e from './dbschema/edgeql-js'

// reads value of EDGEDB_DSN automatically
export const client = createClient()
export { e }
