import { FastifyReply, FastifyRequest } from 'fastify';
import { loginSchema, registerSchema } from '../schemas/auth.schema';
import * as authService from '../services/authService';

export const registerHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { name, email, password } = registerSchema.parse(request.body);

    const user = await authService.registerUser(name, email, password);

    return reply.status(201).send({
      success: true,
      data: { user },
      error: null
    });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return reply.status(400).send({ success: false, data: null, error: 'Form validation error.', details: error.errors });
    }
    return reply.status(400).send({ success: false, data: null, error: error.message });
  }
};

export const loginHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { email, password } = loginSchema.parse(request.body);

    const { token, user } = await authService.loginUser(email, password);

    return reply.send({
      success: true,
      data: { token, user },
      error: null
    });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return reply.status(400).send({ success: false, data: null, error: 'Enter your email and password.', details: error.errors });
    }
    return reply.status(401).send({ success: false, data: null, error: error.message });
  }
};

export const getProfileHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const authUser = (request as any).user;

    if (!authUser) {
      return reply.status(401).send({ success: false, data: null, error: 'Inactive or unauthenticated user.' });
    }

    return reply.send({
      success: true,
      data: authUser.user_metadata,
      error: null
    });
  } catch (error: any) {
    return reply.status(500).send({ success: false, data: null, error: error.message });
  }
};
