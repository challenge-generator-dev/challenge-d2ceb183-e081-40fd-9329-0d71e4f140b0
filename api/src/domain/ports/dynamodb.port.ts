/**
 * Puerto que define las operaciones CRUD para DynamoDB.
 * Este contrato es implementado por la capa de infraestructura.
 */
export interface DynamoDBPort {
  /**
   * Crea un nuevo producto en DynamoDB.
   * @param product Datos del producto a crear.
   * @returns Promise con el producto creado.
   */
  createProduct(product: CreateProductDto): Promise<ProductResponseDto>;

  /**
   * Obtiene un producto por su ID desde DynamoDB.
   * @param id ID del producto.
   * @returns Promise con el producto encontrado o null si no existe.
   */
  getProduct(id: string): Promise<ProductResponseDto | null>;

  /**
   * Actualiza un producto en DynamoDB.
   * @param id ID del producto a actualizar.
   * @param product Datos parciales del producto.
   * @returns Promise con el producto actualizado.
   */
  updateProduct(id: string, product: UpdateProductDto): Promise<ProductResponseDto>;

  /**
   * Elimina un producto de DynamoDB.
   * @param id ID del producto a eliminar.
   * @returns Promise que se resuelve cuando la operación se completa.
   */
  deleteProduct(id: string): Promise<void>;
}

// Tipos reutilizados para mantener consistencia con el contrato expuesto
export interface CreateProductDto {
  name: string;
  price: number;
  stock: number;
  category: string;
}

export interface UpdateProductDto {
  name?: string;
  price?: number;
  stock?: number;
  category?: string;
}

export interface ProductResponseDto {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}