// TODO(reto): archivo stubbeado; implementa los cuerpos.
import React from 'react';
import { ProductResponseDto } from '../types/product.types';
import { useDeleteProduct } from '../hooks/useDeleteProduct';
import { useUpdateProduct } from '../hooks/useUpdateProduct';

interface ProductTableProps {
  products: ProductResponseDto[];
  onProductDeleted?: (id: string) => void;
  onProductUpdated?: (product: ProductResponseDto) => void;
}

export const ProductTable: React.FC<ProductTableProps> = ({
  products,
  onProductDeleted,
  onProductUpdated,
}) => {
  throw new Error('TODO(reto): anonymous');
};