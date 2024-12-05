import { Product } from "../entity/products";

export interface ProductGateway{
    save(product: Product): Promise<void>;
    list(): Promise<Product[]>;
}