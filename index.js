import Bao from "baojs";

const app = new Bao();

app.get("/", (ctx) => {
  return ctx.sendText("Hello, this is Bao.js from Zeabur!");
});

const server = app.listen({port: process.env.PORT || 3000});

console.log(`Listening on ${server.hostname}:${server.port}`);
