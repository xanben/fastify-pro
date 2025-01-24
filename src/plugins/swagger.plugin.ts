import Swagger from '@fastify/swagger';
import SwaggerUi from '@fastify/swagger-ui';
import type { FastifyInstance } from 'fastify';
import plugin from 'fastify-plugin';

export default plugin(async (fastify: FastifyInstance) => {
  await fastify.register(Swagger, {
    mode: 'static',
    specification: {
      path: './spec/v1.yaml',
      baseDir: './'
    }
  });

  await fastify.register(SwaggerUi, {
    routePrefix: '/docs'
  });
});
