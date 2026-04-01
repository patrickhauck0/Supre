import { FastifyInstance } from 'fastify';
import { createHandler, deleteHandler, getByIdHandler, listHandler, updateHandler } from '../controllers/productController';
import { verifyJWT } from '../middlewares/auth';

export default async function productRoutes(server: FastifyInstance) {
  server.post('/', { preHandler: [verifyJWT] }, createHandler);
  server.get('/', { preHandler: [verifyJWT] }, listHandler);
  server.get('/:id', { preHandler: [verifyJWT] }, getByIdHandler);
  server.put('/:id', { preHandler: [verifyJWT] }, updateHandler);
  server.delete('/:id', { preHandler: [verifyJWT] }, deleteHandler);
}
