import { model } from "../model/model";
import { addSchema } from "../model/schemas";

export async function postPlugin(app) {
    await model.isOk(app);

    app.post('/add', addSchema, async (request, reply) => {

        const { banner_path, title, date, description, contentArticle } = request.body;
        const resultModel = await model.addArticle(banner_path, title, date, description, contentArticle);
        if(!resultModel.ok) return reply.code(500).send(app.serverError);
        return reply.code(201).send({ ok: true, message: 'Artigo Criado com Sucesso!' });

    })

}
