import { ISeller } from '../ISeller.interface';

export interface ISellerResponse extends ISeller {
  id?: number;
  dataInclusao?: Date;
  estados: string[];
}
