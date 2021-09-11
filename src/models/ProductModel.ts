import { RetailPriceModel } from './RetailPriceModel';

export interface ProductModel {
  title: string;
  description: string;
  original_retail_price: RetailPriceModel;
  retail_price: RetailPriceModel;
  discount: number;
}
