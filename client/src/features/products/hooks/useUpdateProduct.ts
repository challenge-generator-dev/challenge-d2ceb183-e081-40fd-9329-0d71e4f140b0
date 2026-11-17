import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductService } from '../services/ProductService';
import { UpdateProductDto, ProductResponseDto } from '../types/product.types';

const productService = new ProductService();

export interface UseUpdateProductOptions {
  onSuccess?: (product: ProductResponseDto) => void;
  onError?: (error: Error, product: UpdateProductDto & { id: string }) => void;
}

export interface UseUpdateProductResult {
  mutate: (id: string, data: UpdateProductDto) => void;
  mutateAsync: (id: string, data: UpdateProductDto) => Promise<ProductResponseDto>;
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: Error | null;
  data: ProductResponseDto | null;
  reset: () => void;
}

export function useUpdateProduct(
  options?: UseUpdateProductOptions
): UseUpdateProductResult {
  const queryClient = useQueryClient();

  const mutation = useMutation<ProductResponseDto, Error, { id: string; data: UpdateProductDto }>({
    mutationFn: async ({ id, data }) => {
      return await productService.updateProduct(id, data);
    },
    onSuccess: (updatedProduct) => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      
      const cachedProducts = queryClient.getQueryData<ProductResponseDto[]>(['products', 'list']);
      if (cachedProducts) {
        const updatedProducts = cachedProducts.map(p => 
          p.id === updatedProduct.id ? updatedProduct : p
        );
        queryClient.setQueryData(['products', 'list'], updatedProducts);
      }
      
      queryClient.setQueryData(['products', updatedProduct.id], updatedProduct);
      
      if (options?.onSuccess) {
        options.onSuccess(updatedProduct);
      }
    },
    onError: (error, variables) => {
      if (options?.onError) {
        options.onError(error, { id: variables.id, ...variables.data });
      }
    },
  });

  return {
    mutate: (id: string, data: UpdateProductDto) => {
      mutation.mutate({ id, data });
    },
    mutateAsync: (id: string, data: UpdateProductDto) => {
      return mutation.mutateAsync({ id, data });
    },
    isPending: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
    data: mutation.data ?? null,
    reset: mutation.reset,
  };
}