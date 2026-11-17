// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Injectable, Inject } from '@nestjs/common';
import { DynamoDBPort, CreateProductDto, UpdateProductDto, ProductResponseDto } from '../../../domain/ports/dynamodb.port';
import { Product } from '../../../domain/entities/product.entity';

@Injectable()
export class ProductDynamoRepository {
  constructor(@Inject('DynamoDBPort') private readonly dynamoDBPort: DynamoDBPort) {}

  async create(item: Product): Promise<Product> {
    throw new Error('TODO(reto): create');
  }

  async findById(id: string): Promise<Product | null> {
    const found = await this.dynamoDBPort.getProduct(id);
    if (!found) {
      return null;
    }
    return new Product(
      found.id,
      found.name,
      found.price,
      found.stock,
      found.category,
    );
  }

  async update(id: string, item: Product): Promise<Product> {
    throw new Error('TODO(reto): update');
  }

  async delete(id: string): Promise<void> {
    await this.dynamoDBPort.deleteProduct(id);
  }
}