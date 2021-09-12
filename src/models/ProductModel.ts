import { RetailPriceModel } from './RetailPriceModel';

export interface ProductModel {
  uuid: string;
  title: string;
  description: string;
  original_retail_price: RetailPriceModel;
  retail_price: RetailPriceModel;
  discount: number;
  cover_image_url: string;
}
