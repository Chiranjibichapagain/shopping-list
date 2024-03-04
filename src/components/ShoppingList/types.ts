import { Dispatch } from "react";
import { T_ShoppingListItem } from "../../types";
import { T_UpdateList } from "../../useForm";

export type T_ShoppingListProps = {
  data: T_ShoppingListItem[];
  editProduct: string;
  setEditProduct: Dispatch<React.SetStateAction<string>>;
  handleUpdateItem: (updateData: T_ShoppingListItem) => void;
  shoppingItemChange: T_UpdateList;
  handleChangeUpdateProduct: (e: EventTarget & HTMLInputElement) => void;
  handleRemoveItemFromList: (id: string) => void;
};
