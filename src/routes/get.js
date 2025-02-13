import { model } from "../model/model";

export async function getPlugin(app) {
  app.get('/', async (request, reply) => {

    const resultModel = await model.getArticles();
    if(!resultModel.ok) return reply.code(500).send(app.serverError);
    return reply.code(200).send({ ok: true, articles: resultModel.rows });

  });

}
