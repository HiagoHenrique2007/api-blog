import Fastify from 'fastify';
import { getPlugin } from './routes/get.js';
import { postPlugin } from './routes/post.js';
import { updatePlugin } from './routes/update.js';
import { deletePlugin } from './routes/delete.js';

const app = Fastify();
app.register(getPlugin);
app.register(postPlugin);
app.register(updatePlugin);
app.register(deletePlugin);

app.listen({ port }, (error) => {
  if(error) {
    console.log(`erro ao iniciar o server: ${error}`);
    process.exit(1);
  }
  console.log('server rodando!');
});
