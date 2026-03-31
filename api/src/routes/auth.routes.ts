import { FastifyInstance } from 'fastify';
import { getProfileHandler, loginHandler, registerHandler } from '../controllers/authController';
import { verifyJWT } from '../middlewares/auth';

export default async function authRoutes(server: FastifyInstance) {
  server.post('/register', registerHandler);
  server.post('/login', loginHandler);
  server.get('/profile', { preHandler: [verifyJWT] }, getProfileHandler);
}
