import { ProductDynamoRepository } from '../infrastructure/repositories/dynamodb/product-dynamo.repository';
import { DynamoDBPort, ProductResponseDto } from '../domain/ports/dynamodb.port';
import { Product } from '../domain/entities/product.entity';

describe('ProductDynamoRepository - Fase 2', () => {
  let repository: ProductDynamoRepository;
  let mockDynamoDBPort: jest.Mocked<DynamoDBPort>;

  beforeEach(() => {
    mockDynamoDBPort = {
      createProduct: jest.fn(),
      getProduct: jest.fn(),
      updateProduct: jest.fn(),
      deleteProduct: jest.fn(),
    } as jest.Mocked<DynamoDBPort>;
    repository = new ProductDynamoRepository(mockDynamoDBPort);
  });

  describe('should create a product', () => {
    it('dado Un producto válido; cuando Se invoca ProductDynamoRepository.create con el producto; entonces El producto es creado en DynamoDB y retornado con su ID', async () => {
      const product = new Product('prod-123', 'Laptop', 999.99, 10, 'Electronics');
      const expectedResponse: ProductResponseDto = {
        id: 'prod-123',
        name: 'Laptop',
        price: 999.99,
        stock: 10,
        category: 'Electronics',
      };

      mockDynamoDBPort.createProduct.mockResolvedValue(expectedResponse);

      const result = await repository.create(product);

      expect(mockDynamoDBPort.createProduct).toHaveBeenCalledWith({
        name: 'Laptop',
        price: 999.99,
        stock: 10,
        category: 'Electronics',
      });
      expect(result).toBeInstanceOf(Product);
      expect(result.id).toBe('prod-123');
      expect(result.name).toBe('Laptop');
      expect(result.price).toBe(999.99);
      expect(result.stock).toBe(10);
      expect(result.category).toBe('Electronics');
    });
  });

  describe('should update a product', () => {
    it('dado Un producto existente con ID conocido; cuando Se invoca ProductDynamoRepository.update con el ID y los nuevos datos; entonces El producto es actualizado en DynamoDB y retornado', async () => {
      const product = new Product('prod-123', 'Laptop Pro', 1299.99, 5, 'Electronics');
      const expectedResponse: ProductResponseDto = {
        id: 'prod-123',
        name: 'Laptop Pro',
        price: 1299.99,
        stock: 5,
        category: 'Electronics',
      };

      mockDynamoDBPort.updateProduct.mockResolvedValue(expectedResponse);

      const result = await repository.update('prod-123', product);

      expect(mockDynamoDBPort.updateProduct).toHaveBeenCalledWith('prod-123', {
        name: 'Laptop Pro',
        price: 1299.99,
        stock: 5,
        category: 'Electronics',
      });
      expect(result).toBeInstanceOf(Product);
      expect(result.id).toBe('prod-123');
      expect(result.name).toBe('Laptop Pro');
      expect(result.price).toBe(1299.99);
      expect(result.stock).toBe(5);
      expect(result.category).toBe('Electronics');
    });
  });
});