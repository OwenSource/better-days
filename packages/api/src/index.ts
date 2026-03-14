import { Elysia } from "elysia";

export const app = new Elysia();

app.get("/", () => "Hello Elysia")