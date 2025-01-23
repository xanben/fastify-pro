import {fastify} from "fastify";

const app = fastify({logger: true});

app.get('/', (request, reply) => {
    reply.send({info: 'Fastify Pro API'});
});

await app.listen({port: 3000});
