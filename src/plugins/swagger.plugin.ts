import Swagger from '@fastify/swagger';
import SwaggerUi from '@fastify/swagger-ui';
import type { FastifyInstance } from 'fastify';
import plugin from 'fastify-plugin';

export default plugin(async (fastify: FastifyInstance) => {
  await fastify.register(Swagger, {
    openapi: {
      info: {
        title: process.env.API_TITLE,
        version: 'v1'
      }
    }
  });

  await fastify.register(SwaggerUi, {
    routePrefix: '/docs'
  });
});
