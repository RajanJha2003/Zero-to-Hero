import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon("postgresql://zero2hero_owner:xnIR6kA8UhOt@ep-noisy-star-a1k2ifif.ap-southeast-1.aws.neon.tech/zero2hero?sslmode=require");



export const db=drizzle(sql,{schema})
