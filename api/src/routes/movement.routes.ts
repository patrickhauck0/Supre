import { FastifyInstance } from 'fastify';
import { createMovementHandler, listMovementsHandler } from '../controllers/movementController';
import { verifyJWT } from '../middlewares/auth';

export default async function movementRoutes(server: FastifyInstance) {
  server.post('/', { preHandler: [verifyJWT] }, createMovementHandler);
  server.get('/', { preHandler: [verifyJWT] }, listMovementsHandler);
}
