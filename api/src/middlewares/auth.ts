import { FastifyReply, FastifyRequest } from 'fastify';
import { supabase } from '../config/supabaseClient';

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return reply.status(401).send({
      success: false,
      data: null,
      error: 'Acesso Negado: Nenhum token de autenticação fornecido.',
    });
  }

  const token = authHeader.replace('Bearer ', '').trim();

  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data.user) {
    return reply.status(401).send({
      success: false,
      data: null,
      error: 'Sessão expirada ou Token inválido. Faça login no App novamente para gerar um novo.',
    });
  }

  (request as any).user = data.user;
}
