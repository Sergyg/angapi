import {BaseModel} from "./base";

export class IProduct extends BaseModel<IProduct>
{
  "name": "string"
  "description": "string"
  "price": number
  "pictureUrl": "string"
  "productType": "string"
  "productBrand": "string"
  "quantityInStock": number

  constructor(model?: Partial<IProduct>)
  {
  super(model);
  }
}


