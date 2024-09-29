  import {integer, varchar, pgTable, serial, text, timestamp, jsonb, boolean } from 'drizzle-orm/pg-core';



export const Users=pgTable("users",{
    id:serial("id").primaryKey(),
    email:varchar("email",{length:255}).notNull().unique(),
    name:varchar("name",{length:255}).notNull(),
    createdAt:timestamp("created-at").defaultNow().notNull(),

})