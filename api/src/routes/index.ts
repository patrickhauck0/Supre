import { FastifyInstance } from 'fastify';
import authRoutes from './auth.routes';
import productRoutes from './product.routes';
import movementRoutes from './movement.routes';

export default async function routes(server: FastifyInstance) {
  server.register(authRoutes, { prefix: '/api/auth' });
  server.register(productRoutes, { prefix: '/api/products' });
  server.register(movementRoutes, { prefix: '/api/movements' });
}
