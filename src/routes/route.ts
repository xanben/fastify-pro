import type { FastifyInstance } from 'fastify';
import type { Info } from '../types/app';

export default async function (app: FastifyInstance) {
  app.get<{ Reply: Info }>('/', (request, reply) => {
    reply.send({ info: process.env.API_TITLE });
  });
}
