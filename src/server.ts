import path from 'node:path';
import autoload from '@fastify/autoload';
import { fastify } from 'fastify';

const app = fastify({ logger: true })
  .register(autoload, { dir: path.join(import.meta.dirname, 'plugins') })
  .register(autoload, { dir: path.join(import.meta.dirname, 'routes') });

await app.listen({ port: (process.env.API_PORT as unknown as number) || 3000 });
