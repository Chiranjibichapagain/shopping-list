import { useState } from "react";

export type T_List = {
  name: string;
  amount: number | string;
};
export type T_UpdateList = {
  newName: string;
  newAmount: number | string;
};

export const useForm = () => {
  const [newShoppingItem, setNewShoppingItem] = useState<T_List>({
    name: "",
    amount: "",
  });

  const [shoppingItemChange, setShoppingItemChange] = useState<T_UpdateList>({
    newName: "",
    newAmount: "",
  });

  return {
    newShoppingItem,
    setNewShoppingItem,
    shoppingItemChange,
    setShoppingItemChange,
  };
};
