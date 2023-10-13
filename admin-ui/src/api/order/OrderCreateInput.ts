import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  paymentintent?: string | null;
  paymentstatus?: "Option1" | null;
  price?: number | null;
  products?: ProductCreateNestedManyWithoutOrdersInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
