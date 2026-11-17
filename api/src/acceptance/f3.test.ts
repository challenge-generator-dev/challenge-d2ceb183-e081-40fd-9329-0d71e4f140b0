import { ProductMongoRepository } from '../infrastructure/repositories/mongodb/product-mongo.repository';
import { MongoDBPort, ProductResponseDto } from '../domain/ports/mongodb.port';
import { Product } from '../domain/entities/product.entity';

describe('ProductMongoRepository - Fase 3', () => {
  let repository: ProductMongoRepository;
  let mockMongoDBPort: jest.Mocked<MongoDBPort>;

  beforeEach(() => {
    mockMongoDBPort = {
      createProduct: jest.fn(),
      getProduct: jest.fn(),
      updateProduct: jest.fn(),
      deleteProduct: jest.fn(),
    } as jest.Mocked<MongoDBPort>;
    repository = new ProductMongoRepository(mockMongoDBPort);
  });

  describe('should delete a product', () => {
    it('dado Un producto existente con ID conocido; cuando Se invoca ProductMongoRepository.delete con el ID; entonces El producto es eliminado de MongoDB', async () => {
      mockMongoDBPort.deleteProduct.mockResolvedValue();

      await repository.delete('prod-123');

      expect(mockMongoDBPort.deleteProduct).toHaveBeenCalledWith('prod-123');
      expect(mockMongoDBPort.deleteProduct).toHaveBeenCalledTimes(1);
    });
  });

  describe('should create a product', () => {
    it('dado Un producto válido; cuando Se invoca ProductMongoRepository.create con el producto; entonces El producto es creado en MongoDB y retornado con su ID', async () => {
      const product = new Product('prod-456', 'Mouse', 29.99, 50, 'Accessories');
      const expectedResponse: ProductResponseDto = {
        id: 'prod-456',
        name: 'Mouse',
        price: 29.99,
        stock: 50,
        category: 'Accessories',
      };

      mockMongoDBPort.createProduct.mockResolvedValue(expectedResponse);

      const result = await repository.create(product);

      expect(mockMongoDBPort.createProduct).toHaveBeenCalledWith({
        name: 'Mouse',
        price: 29.99,
        stock: 50,
        category: 'Accessories',
      });
      expect(result).toBeInstanceOf(Product);
      expect(result.id).toBe('prod-456');
      expect(result.name).toBe('Mouse');
      expect(result.price).toBe(29.99);
      expect(result.stock).toBe(50);
      expect(result.category).toBe('Accessories');
    });
  });
});