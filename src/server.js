import Fastify from 'fastify';
import { getPlugin } from './routes/get.js';
import { postPlugin } from './routes/post.js';
import { updatePlugin } from './routes/update.js';
import { deletePlugin } from './routes/delete.js';

const port = 6699;
const app = Fastify();
await app.register(getPlugin);
await app.register(postPlugin);
await app.register(updatePlugin);
await app.register(deletePlugin);

app.listen({ port }, (error) => {
  if(error) {
    console.log(`erro ao iniciar o server: ${error}`);
    process.exit(1);
  }
  console.log('server rodando!');
});
