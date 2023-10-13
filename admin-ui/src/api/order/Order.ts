import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  paymentintent: string | null;
  paymentstatus?: "Option1" | null;
  price: number | null;
  products?: Array<Product>;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
