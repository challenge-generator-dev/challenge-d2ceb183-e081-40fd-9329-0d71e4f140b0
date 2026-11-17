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

export type Product = ProductResponseDto;

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
}

export interface ProductListResponse {
  products: Product[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ProductValidationError {
  field: string;
  message: string;
}

export interface ProductFormData {
  name: string;
  price: string | number;
  stock: string | number;
  category: string;
}

export const PRODUCT_CATEGORIES = [
  'electronics',
  'clothing',
  'food',
  'books',
  'home',
  'sports',
  'toys',
  'other'
] as const;

export type ProductCategory = typeof PRODUCT_CATEGORIES[number];

export const isValidCategory = (category: string): category is ProductCategory => {
  return PRODUCT_CATEGORIES.includes(category as ProductCategory);
};

export const createEmptyProduct = (): ProductFormData => ({
  name: '',
  price: '',
  stock: '',
  category: ''
});

export const productToFormData = (product: Product): ProductFormData => ({
  name: product.name,
  price: product.price,
  stock: product.stock,
  category: product.category
});

export const formDataToCreateDto = (formData: ProductFormData): CreateProductDto => ({
  name: formData.name.trim(),
  price: Number(formData.price),
  stock: Number(formData.stock),
  category: formData.category
});

export const formDataToUpdateDto = (formData: ProductFormData): UpdateProductDto => {
  const updateData: UpdateProductDto = {};
  
  if (formData.name.trim()) {
    updateData.name = formData.name.trim();
  }
  if (formData.price !== '') {
    updateData.price = Number(formData.price);
  }
  if (formData.stock !== '') {
    updateData.stock = Number(formData.stock);
  }
  if (formData.category) {
    updateData.category = formData.category;
  }
  
  return updateData;
};

export const validateProductForm = (formData: ProductFormData): ProductValidationError[] => {
  const errors: ProductValidationError[] = [];
  
  if (!formData.name || formData.name.trim().length === 0) {
    errors.push({ field: 'name', message: 'El nombre del producto es requerido' });
  } else if (formData.name.trim().length < 3) {
    errors.push({ field: 'name', message: 'El nombre debe tener al menos 3 caracteres' });
  } else if (formData.name.trim().length > 100) {
    errors.push({ field: 'name', message: 'El nombre no puede exceder 100 caracteres' });
  }
  
  const price = Number(formData.price);
  if (formData.price === '' || isNaN(price)) {
    errors.push({ field: 'price', message: 'El precio es requerido' });
  } else if (price < 0) {
    errors.push({ field: 'price', message: 'El precio no puede ser negativo' });
  } else if (price > 999999.99) {
    errors.push({ field: 'price', message: 'El precio excede el límite permitido' });
  }
  
  const stock = Number(formData.stock);
  if (formData.stock === '' || isNaN(stock)) {
    errors.push({ field: 'stock', message: 'El stock es requerido' });
  } else if (stock < 0) {
    errors.push({ field: 'stock', message: 'El stock no puede ser negativo' });
  } else if (!Number.isInteger(stock)) {
    errors.push({ field: 'stock', message: 'El stock debe ser un número entero' });
  }
  
  if (!formData.category || formData.category.trim().length === 0) {
    errors.push({ field: 'category', message: 'La categoría es requerida' });
  } else if (!isValidCategory(formData.category)) {
    errors.push({ field: 'category', message: 'La categoría no es válida' });
  }
  
  return errors;
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

export const formatStock = (stock: number): string => {
  if (stock === 0) {
    return 'Sin stock';
  }
  if (stock < 10) {
    return `Stock bajo (${stock})`;
  }
  return `Stock disponible (${stock})`;
};

export const getStockStatus = (stock: number): 'out-of-stock' | 'low-stock' | 'in-stock' => {
  if (stock === 0) {
    return 'out-of-stock';
  }
  if (stock < 10) {
    return 'low-stock';
  }
  return 'in-stock';
};

export const filterProducts = (products: Product[], filters: ProductFilters): Product[] => {
  return products.filter(product => {
    if (filters.category && product.category !== filters.category) {
      return false;
    }
    
    if (filters.minPrice !== undefined && product.price < filters.minPrice) {
      return false;
    }
    
    if (filters.maxPrice !== undefined && product.price > filters.maxPrice) {
      return false;
    }
    
    if (filters.inStock !== undefined) {
      if (filters.inStock && product.stock === 0) {
        return false;
      }
      if (!filters.inStock && product.stock > 0) {
        return false;
      }
    }
    
    return true;
  });
};

export const sortProducts = (
  products: Product[],
  sortBy: 'name' | 'price' | 'stock' | 'category',
  order: 'asc' | 'desc' = 'asc'
): Product[] => {
  const sorted = [...products].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'price':
        comparison = a.price - b.price;
        break;
      case 'stock':
        comparison = a.stock - b.stock;
        break;
      case 'category':
        comparison = a.category.localeCompare(b.category);
        break;
    }
    
    return order === 'asc' ? comparison : -comparison;
  });
  
  return sorted;
};