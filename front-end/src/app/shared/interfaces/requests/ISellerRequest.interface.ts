import { ISeller } from '../ISeller.interface';

export interface ISellerRequest extends ISeller {
  regiao: string;
}
