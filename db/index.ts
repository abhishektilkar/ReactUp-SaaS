import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

const connectionString = 'postgresql://postgres.foexpywvxkqajgtzgyjm:Sn0f4IGeMsjCpwZ6@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres';// || 'postgres://localhost:5432/drizzle'

const client = postgres(connectionString)
export const db = drizzle(client, { schema });
