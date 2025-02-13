import { model } from "../model/model"

export async function deletePlugin(app) {
    await model.isOk(app);

    app.delete('/delete', async (request, reply) => {

        const { id } = request.body;
        const resultModel = await model.deleteArticle(id);
        if(!resultModel) return reply.code(500).send(app.serverError);
        return reply.code(200).send({ ok: true, message: 'Artigo Deletado com Sucesso!' })

    })
}
