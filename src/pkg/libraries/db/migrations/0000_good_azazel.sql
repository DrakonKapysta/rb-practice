CREATE TABLE "characters" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"status" text NOT NULL,
	"species" text NOT NULL,
	"type" text NOT NULL,
	"gender" text NOT NULL,
	"origin" text NOT NULL,
	"location" text NOT NULL,
	"image" text NOT NULL,
	"episode" text NOT NULL,
	"url" text NOT NULL,
	"created" timestamp NOT NULL
);
