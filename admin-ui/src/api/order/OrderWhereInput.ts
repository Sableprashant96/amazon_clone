import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  paymentintent?: StringNullableFilter;
  paymentstatus?: "Option1";
  price?: FloatNullableFilter;
  products?: ProductListRelationFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
