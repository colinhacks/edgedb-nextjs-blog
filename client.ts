import { createClient } from 'edgedb'
import e from './dbschema/edgeql-js'

// reads value of EDGEDB_DSN automatically
export const client = createClient({
  // TLS configuration is beyond the scope
  // of this example project
  dsn: 'edgedb://edgedb:edgedbpassword@157.245.77.5:5656/edgedb',
  tlsSecurity: 'insecure',
})
export { e }
