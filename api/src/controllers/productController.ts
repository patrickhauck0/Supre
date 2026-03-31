import { FastifyReply, FastifyRequest } from 'fastify';
import { createProductSchema, updateProductSchema } from '../schemas/product.schema';
import * as productService from '../services/productService';

export const createHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const userId = (request as any).user.id;
    const bodyData = createProductSchema.parse(request.body);

    const product = await productService.createProduct(userId, bodyData);

    return reply.status(201).send({ success: true, data: { product }, error: null });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return reply.status(400).send({ success: false, data: null, error: 'Validation error.', details: error.errors });
    }
    return reply.status(500).send({ success: false, data: null, error: error.message });
  }
};

export const listHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const userId = (request as any).user.id;
    const products = await productService.getProducts(userId);

    return reply.send({ success: true, data: { products }, error: null });
  } catch (error: any) {
    return reply.status(500).send({ success: false, data: null, error: error.message });
  }
};

export const getByIdHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const userId = (request as any).user.id;
    const { id } = request.params as { id: string };

    const product = await productService.getProductById(userId, id);

    if (!product) {
      return reply.status(404).send({ success: false, data: null, error: "Product not found." });
    }

    return reply.send({ success: true, data: { product }, error: null });
  } catch (error: any) {
    return reply.status(500).send({ success: false, data: null, error: error.message });
  }
};

export const updateHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const userId = (request as any).user.id;
    const { id } = request.params as { id: string };
    const bodyData = updateProductSchema.parse(request.body);

    const product = await productService.updateProduct(userId, id, bodyData);

    if (!product) {
      return reply.status(404).send({ success: false, data: null, error: "Product not found." });
    }

    return reply.send({ success: true, data: { product }, error: null });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return reply.status(400).send({ success: false, data: null, error: 'Validation error.', details: error.errors });
    }
    return reply.status(500).send({ success: false, data: null, error: error.message });
  }
};

export const deleteHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const userId = (request as any).user.id;
    const { id } = request.params as { id: string };

    const product = await productService.deleteProduct(userId, id);

    if (!product) {
      return reply.status(404).send({ success: false, data: null, error: "Product not found." });
    }

    return reply.send({ success: true, data: { product }, error: null });
  } catch (error: any) {
    return reply.status(500).send({ success: false, data: null, error: error.message });
  }
};
