import { Injectable, Inject } from '@nestjs/common';
import { Product } from '../../domain/entities/product.entity';
import { DynamoDBPort } from '../../domain/ports/dynamodb.port';
import { MongoDBPort } from '../../domain/ports/mongodb.port';
import { CreateProductDto, UpdateProductDto, ProductResponseDto } from '../../domain/ports/dynamodb.port';

/**
 * Servicio de aplicación que orquesta las operaciones CRUD para productos.
 * Decide qué repositorio usar (DynamoDB o MongoDB) basado en la configuración.
 */
@Injectable()
export class ProductService {
  constructor(
    @Inject('DynamoDBPort') private readonly dynamoDBPort: DynamoDBPort,
    @Inject('MongoDBPort') private readonly mongoDBPort: MongoDBPort,
  ) {}

  /**
   * Crea un nuevo producto.
   * TODO(reto): Implementar la lógica para decidir qué repositorio usar.
   * @param createProductDto Datos del producto a crear.
   * @returns Promise con el producto creado.
   */
  async createProduct(createProductDto: CreateProductDto): Promise<ProductResponseDto> {
    const product = new Product(
      this.generateId(),
      createProductDto.name,
      createProductDto.price,
      createProductDto.stock,
      createProductDto.category,
    );

    // TODO(reto): Decidir qué repositorio usar (DynamoDB o MongoDB)
    return this.dynamoDBPort.createProduct(createProductDto);
  }

  /**
   * Obtiene un producto por su ID.
   * TODO(reto): Implementar la lógica para decidir qué repositorio usar.
   * @param id ID del producto.
   * @returns Promise con el producto encontrado o null si no existe.
   */
  async getProduct(id: string): Promise<ProductResponseDto | null> {
    // TODO(reto): Decidir qué repositorio usar (DynamoDB o MongoDB)
    return this.dynamoDBPort.getProduct(id);
  }

  /**
   * Actualiza un producto.
   * TODO(reto): Implementar la lógica para decidir qué repositorio usar.
   * @param id ID del producto a actualizar.
   * @param updateProductDto Datos parciales del producto.
   * @returns Promise con el producto actualizado.
   */
  async updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<ProductResponseDto> {
    // TODO(reto): Decidir qué repositorio usar (DynamoDB o MongoDB)
    return this.dynamoDBPort.updateProduct(id, updateProductDto);
  }

  /**
   * Elimina un producto.
   * TODO(reto): Implementar la lógica para decidir qué repositorio usar.
   * @param id ID del producto a eliminar.
   * @returns Promise que se resuelve cuando la operación se completa.
   */
  async deleteProduct(id: string): Promise<void> {
    // TODO(reto): Decidir qué repositorio usar (DynamoDB o MongoDB)
    return this.dynamoDBPort.deleteProduct(id);
  }

  /**
   * Genera un ID único para nuevos productos.
   * @returns string ID generado.
   */
  private generateId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}