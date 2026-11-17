import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductService } from '../services/ProductService';
import { ProductResponseDto } from '../types/product.types';

const productService = new ProductService();

export interface UseDeleteProductOptions {
  onSuccess?: (id: string) => void;
  onError?: (error: Error, id: string) => void;
}

export interface UseDeleteProductResult {
  mutate: (id: string) => void;
  mutateAsync: (id: string) => Promise<void>;
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: Error | null;
  reset: () => void;
}

export function useDeleteProduct(
  options?: UseDeleteProductOptions
): UseDeleteProductResult {
  const queryClient = useQueryClient();

  const mutation = useMutation<void, Error, string>({
    mutationFn: async (id: string) => {
      await productService.deleteProduct(id);
    },
    onSuccess: (_data, id) => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      
      const cachedProducts = queryClient.getQueryData<ProductResponseDto[]>(['products', 'list']);
      if (cachedProducts) {
        const updatedProducts = cachedProducts.filter(p => p.id !== id);
        queryClient.setQueryData(['products', 'list'], updatedProducts);
      }
      
      if (options?.onSuccess) {
        options.onSuccess(id);
      }
    },
    onError: (error, id) => {
      if (options?.onError) {
        options.onError(error, id);
      }
    },
  });

  return {
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
    reset: mutation.reset,
  };
}