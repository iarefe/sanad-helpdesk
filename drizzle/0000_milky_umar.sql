CREATE TABLE `tickets` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`owner` text NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`requester` text NOT NULL,
	`department` text NOT NULL,
	`category` text NOT NULL,
	`priority` text NOT NULL,
	`status` text NOT NULL,
	`assignee` text NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	`timeline` text NOT NULL
);
