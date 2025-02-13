import Fastify from 'fastify';
import { getPlugin } from './routes/get.js';
import { postPlugin } from './routes/post.js';
import { updatePlugin } from './routes/update.js';
import { deletePlugin } from './routes/delete.js';


const port = 6699;
const app = Fastify();
const serverErrorMessage = { ok: false, message: 'Erro interno do servidor... Estamos resolvendo o problema.' };
app.decorate('serverError', serverErrorMessage)
await app.register(getPlugin, { prefix: '/articles' });
await app.register(postPlugin, { prefix: '/articles' });
await app.register(updatePlugin, { prefix: '/articles' });
await app.register(deletePlugin, { prefix: '/articles' });

app.listen({ port }, (error) => {
  if(error) {
    console.log(`erro ao iniciar o server: ${error}`);
    process.exit(1);
  }
  console.log('server rodando!');
});
