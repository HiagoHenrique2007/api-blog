export async function getPlugin(app) {

  app.get('/', (request, reply) => {

    // retornar a lista de artigos...
    return reply.code(200).send({ ok: true });

  });

}
