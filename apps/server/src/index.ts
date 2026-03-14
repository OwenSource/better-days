import { app } from "@repos/api";

const PORT = process.env.PORT || 3000;

app.listen(PORT);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);