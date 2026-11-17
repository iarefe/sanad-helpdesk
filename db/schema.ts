import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
export const tickets = sqliteTable('tickets', {
 id: integer('id').primaryKey({ autoIncrement: true }),
 owner: text('owner').notNull(), title: text('title').notNull(), description: text('description').notNull(),
 requester: text('requester').notNull(), department: text('department').notNull(), category: text('category').notNull(),
 priority: text('priority').notNull(), status: text('status').notNull(), assignee: text('assignee').notNull(),
 createdAt: text('created_at').notNull(), updatedAt: text('updated_at').notNull(),
 timeline: text('timeline').notNull(),
});
