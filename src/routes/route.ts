import {FastifyInstance} from "fastify";

export default async function (app: FastifyInstance) {
    app.get('/', (request, reply) => {
        reply.send({info: 'Fastify Pro API'});
    });
}
