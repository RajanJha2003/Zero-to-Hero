  import {integer, varchar, pgTable, serial, text, timestamp, jsonb, boolean } from 'drizzle-orm/pg-core';



export const Users=pgTable("users",{
    id:serial("id").primaryKey(),
    email:varchar("email",{length:255}).notNull().unique(),
    name:varchar("name",{length:255}).notNull(),
    createdAt:timestamp("created-at").defaultNow().notNull(),

})


export const Reports=pgTable("reports",{
    id:serial("id").primaryKey(),
    userid:integer("user_id").references(()=>Users.id).notNull(),
    location:text("location").notNull(),
    wasteType:varchar("waste_type",{length:255}).notNull(),
    amount:varchar("amount",{length:255}).notNull(),
    imageurl:text("image_url"),
    verificationResult:jsonb("Verification_result"),
    status:varchar("status",{length:255}).notNull().default("pending"),
    createdAt:timestamp("created_at").defaultNow().notNull(),
    collectorId:integer("collector_id").references(()=>Users.id),


})