import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const feedbacks = pgTable('feedbacks', {
  id: serial('id').primaryKey(),
  projectId: integer('project_id'),
  userName: text('user_name'),
  userEmail: text('user_email'),
  message: text('message'),
  rating: integer('rating'),
});

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  name: text('name'),
  description: text('description'),
  url: text('url'),
  userId: varchar('user_id')
});

export const projectsRelations = relations(projects, ({ many }) => ({
  feedbacks: many(feedbacks),
}));

export const feedbackRelations = relations(feedbacks, ({ one }) => ({
  projects: one(projects, {
    fields: [feedbacks.projectId],
    references: [projects.id]
  })
}));