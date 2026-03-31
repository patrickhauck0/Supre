import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import Fastify, { FastifyInstance } from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import routes from './routes';

export const server: FastifyInstance = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
});

// Zod Validator
server.setValidatorCompiler(validatorCompiler);
server.setSerializerCompiler(serializerCompiler);

// Helmet Protection (AI injectors)
server.register(helmet);

// CORS Protection (* open for all devices)
server.register(cors, {
  origin: '*',
});

// Rate limiter (anti ddos)
server.register(rateLimit, {
  max: 100,
  timeWindow: '1 minute',
});

// Error Handler
server.setErrorHandler((error: any, request, reply) => {
  request.log.error(error);

  if (error.validation) {
    return reply.status(400).send({
      success: false,
      data: null,
      error: 'Erro de validação nos dados enviados.',
      details: error.validation,
    });
  }

  if (error.statusCode) {
    return reply.status(error.statusCode).send({
      success: false,
      data: null,
      error: error.message,
    });
  }

  return reply.status(500).send({
    success: false,
    data: null,
    error: 'Ocorreu um erro interno no servidor (500). Tente novamente mais tarde.',
  });
});

// All routes
server.register(routes);

// Test API
server.get('/ping', async (request, reply) => {
  return reply.send({
    success: true,
    data: "Success API!",
    error: null
  });
});

export default server;
