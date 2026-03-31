import { FastifyReply, FastifyRequest } from 'fastify';
import { supabase } from '../config/supabaseClient';

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return reply.status(401).send({
      success: false,
      data: null,
      error: 'Access Denied: No authentication token provided.',
    });
  }

  const token = authHeader.replace('Bearer ', '').trim();

  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data.user) {
    return reply.status(401).send({
      success: false,
      data: null,
      error: 'Session expired or invalid token. Log in to the app again to generate a new one.',
    });
  }

  (request as any).user = data.user;
}
