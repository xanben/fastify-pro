import type { FastifyInstance } from 'fastify';

export default async function (app: FastifyInstance) {
  app.get('/', { schema }, (request, reply) => {
    reply.send({ info: process.env.API_TITLE });
  });
}

const schema = {
  tags: ['System'],
  summary: 'Get API info',
  response: {
    200: {
      description: 'OK',
      type: 'object',
      properties: {
        info: { type: 'string' }
      }
    }
  }
};
