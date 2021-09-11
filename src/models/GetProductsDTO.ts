import { MetaModel } from './MetaModel';
import { ProductModel } from './ProductModel';

export interface GetProductsDTO {
  meta: MetaModel;
  data: Array<ProductModel>;
}
