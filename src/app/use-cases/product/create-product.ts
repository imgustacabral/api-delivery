import { Product } from '../../entities/product';
import { ProductsRepository } from '../..//repositories/products.repository';
import { Injectable } from '@nestjs/common';

interface CreateProductRequest {
  name: string;
  price: string;
}

interface CreateProductResponse {
  product: Product;
}

@Injectable()
export class CreateProduct {
  constructor(private readonly productsRepository: ProductsRepository) {}
  async execute(request: CreateProductRequest): Promise<CreateProductResponse> {
    const { name, price } = request;

    const product = new Product({
      name,
      price,
    });
    await this.productsRepository.create(product);

    return {
      product,
    };
  }
}
