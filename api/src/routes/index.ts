import { FastifyInstance } from 'fastify';
import authRoutes from './auth.routes';

export default async function routes(server: FastifyInstance) {
  server.register(authRoutes, { prefix: '/api/auth' });
}
