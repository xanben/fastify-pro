import {fastify} from "fastify";

const app = fastify({logger: true});

app.get('/', (request, reply) => {
    reply.send({info: 'Fastify Pro API'});
});

await app.listen({port: process.env.API_PORT || 3000});
