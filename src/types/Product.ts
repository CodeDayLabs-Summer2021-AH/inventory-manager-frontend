export interface LocationProducts {
    id: number;
    products: Product[];
  }
  
  export interface Product {
    id: number;
    sku: string;
    name: string;
    row: string;
    section: string;
    quantityOnHand: number;
    dateReceived: string;
    image: string;
  }