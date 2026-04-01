import { FastifyReply, FastifyRequest } from 'fastify';
import { createMovementSchema } from '../schemas/movement.schema';
import * as movementService from '../services/movementService';

export const createMovementHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const userId = (request as any).user.id;
    const bodyData = createMovementSchema.parse(request.body);

    const result = await movementService.createMovement(userId, bodyData);

    return reply.status(201).send({
      success: true,
      data: result,
      error: null
    });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return reply.status(400).send({ success: false, data: null, error: 'Validation Error', details: error.errors });
    }

    if (error.message === "Insufficient stock for this operation." || error.message === "Product not found or does not belong to user.") {
      return reply.status(400).send({ success: false, data: null, error: error.message });
    }

    return reply.status(500).send({ success: false, data: null, error: error.message });
  }
};

export const listMovementsHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const userId = (request as any).user.id;
    const movements = await movementService.getMovements(userId);

    return reply.send({
      success: true,
      data: { movements },
      error: null
    });
  } catch (error: any) {
    return reply.status(500).send({ success: false, data: null, error: error.message });
  }
};
