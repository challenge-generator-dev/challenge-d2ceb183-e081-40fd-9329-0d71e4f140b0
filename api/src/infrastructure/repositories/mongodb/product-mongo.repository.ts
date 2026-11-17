// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Injectable, Inject } from '@nestjs/common';
import { MongoDBPort, CreateProductDto, UpdateProductDto, ProductResponseDto } from '../../../domain/ports/mongodb.port';
import { Product } from '../../../domain/entities/product.entity';

@Injectable()
export class ProductMongoRepository {
  constructor(@Inject('MongoDBPort') private readonly mongoDBPort: MongoDBPort) {}

  async create(item: Product): Promise<Product> {
    throw new Error('TODO(reto): create');
  }

  async findById(id: string): Promise<Product | null> {
    const found = await this.mongoDBPort.getProduct(id);
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
    const updateDto: UpdateProductDto = {
      name: item.name,
      price: item.price,
      stock: item.stock,
      category: item.category,
    };
    const updated = await this.mongoDBPort.updateProduct(id, updateDto);
    return new Product(
      updated.id,
      updated.name,
      updated.price,
      updated.stock,
      updated.category,
    );
  }

  async delete(id: string): Promise<void> {
    throw new Error('TODO(reto): delete');
  }
}