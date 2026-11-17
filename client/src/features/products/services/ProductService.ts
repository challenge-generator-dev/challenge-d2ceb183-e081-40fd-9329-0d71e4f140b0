import axios from 'axios';
import { CreateProductDto, UpdateProductDto, ProductResponseDto } from '../types/product.types';

export class ProductService {
  private readonly baseUrl = 'http://localhost:3000/products';

  async createProduct(productData: CreateProductDto): Promise<ProductResponseDto> {
    try {
      const response = await axios.post<ProductResponseDto>(this.baseUrl, productData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Error creating product');
      }
      throw new Error('Error creating product');
    }
  }

  async getProduct(id: string): Promise<ProductResponseDto> {
    try {
      const response = await axios.get<ProductResponseDto>(`${this.baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Error fetching product');
      }
      throw new Error('Error fetching product');
    }
  }

  async updateProduct(id: string, productData: UpdateProductDto): Promise<ProductResponseDto> {
    try {
      const response = await axios.put<ProductResponseDto>(`${this.baseUrl}/${id}`, productData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Error updating product');
      }
      throw new Error('Error updating product');
    }
  }

  async deleteProduct(id: string): Promise<void> {
    try {
      await axios.delete(`${this.baseUrl}/${id}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Error deleting product');
      }
      throw new Error('Error deleting product');
    }
  }
}