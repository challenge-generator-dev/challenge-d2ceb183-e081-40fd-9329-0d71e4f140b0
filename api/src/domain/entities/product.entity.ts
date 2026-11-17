/**
 * Entidad de dominio que representa un producto.
 * Contiene la lógica de negocio relacionada con los productos.
 */
export class Product {
  constructor(
    public readonly id: string,
    public name: string,
    public price: number,
    public stock: number,
    public category: string,
  ) {
    this.validate();
  }

  /**
   * Valida los atributos del producto.
   * @throws Error si algún atributo no cumple con las reglas de negocio.
   */
  private validate(): void {
    if (!this.name || this.name.trim().length === 0) {
      throw new Error('El nombre del producto es obligatorio');
    }
    if (this.price <= 0) {
      throw new Error('El precio debe ser mayor que cero');
    }
    if (this.stock < 0) {
      throw new Error('El stock no puede ser negativo');
    }
    if (!this.category || this.category.trim().length === 0) {
      throw new Error('La categoría es obligatoria');
    }
    this.validatePriceRange();
    this.validateStockLimit();
    this.validateNameLength();
    this.validateCategoryFormat();
  }

  /**
   * Valida que el precio esté dentro de un rango razonable.
   */
  private validatePriceRange(): void {
    const MAX_PRICE = 1000000;
    if (this.price > MAX_PRICE) {
      throw new Error(`El precio no puede exceder ${MAX_PRICE}`);
    }
  }

  /**
   * Valida que el stock no exceda un límite máximo.
   */
  private validateStockLimit(): void {
    const MAX_STOCK = 99999;
    if (this.stock > MAX_STOCK) {
      throw new Error(`El stock no puede exceder ${MAX_STOCK} unidades`);
    }
  }

  /**
   * Valida la longitud del nombre del producto.
   */
  private validateNameLength(): void {
    const MIN_NAME_LENGTH = 2;
    const MAX_NAME_LENGTH = 200;
    if (this.name.length < MIN_NAME_LENGTH) {
      throw new Error(`El nombre debe tener al menos ${MIN_NAME_LENGTH} caracteres`);
    }
    if (this.name.length > MAX_NAME_LENGTH) {
      throw new Error(`El nombre no puede exceder ${MAX_NAME_LENGTH} caracteres`);
    }
  }

  /**
   * Valida que la categoría tenga un formato válido.
   */
  private validateCategoryFormat(): void {
    const VALID_CATEGORIES = ['electronics', 'clothing', 'food', 'books', 'toys', 'home', 'sports', 'other'];
    const normalizedCategory = this.category.toLowerCase().trim();
    if (!VALID_CATEGORIES.includes(normalizedCategory)) {
      throw new Error(`La categoría debe ser una de: ${VALID_CATEGORIES.join(', ')}`);
    }
    this.category = normalizedCategory;
  }

  /**
   * Verifica si el producto tiene stock disponible.
   */
  public hasStock(): boolean {
    return this.stock > 0;
  }

  /**
   * Verifica si el producto está agotado.
   */
  public isOutOfStock(): boolean {
    return this.stock === 0;
  }

  /**
   * Verifica si el stock está bajo (menos de 10 unidades).
   */
  public isLowStock(): boolean {
    return this.stock > 0 && this.stock < 10;
  }

  /**
   * Obtiene el valor total del inventario para este producto.
   */
  public getInventoryValue(): number {
    return this.price * this.stock;
  }

  /**
   * Convierte la entidad a un DTO para respuesta.
   * @returns ProductResponseDto
   */
  toResponseDto(): ProductResponseDto {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      stock: this.stock,
      category: this.category,
    };
  }

  /**
   * Crea una copia de la entidad con nuevos valores.
   * @param partial Datos parciales para actualizar.
   * @returns Nueva instancia de Product
   */
  static createFromPartial(id: string, partial: Partial<Product>): Product {
    return new Product(
      id,
      partial.name ?? '',
      partial.price ?? 0,
      partial.stock ?? 0,
      partial.category ?? '',
    );
  }
}

/**
 * DTO de respuesta para productos.
 */
export interface ProductResponseDto {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}