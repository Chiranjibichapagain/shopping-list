import { T_ShoppingListItem } from "../../types";
import { T_List } from "../../useForm";

export type T_NewItemFormProps = {
  newShoppingItem: T_List;
  handleChangeNewProduct: (e: EventTarget & HTMLInputElement) => void;
  isItemReady: boolean;
  handleAddNewShoppingItem: (newProduct: T_ShoppingListItem) => void;
};
