import { v4 as uuidv4 } from "uuid";
import { T_ShoppingListItem } from "./types";

export const generateRandomProducts = (): T_ShoppingListItem[] => {
  const randomData: T_ShoppingListItem[] = [
    {
      id: uuidv4(),
      name: "Himalayan Green tea mint flavour",
      amount: 3,
    },

    {
      id: uuidv4(),
      name: "Chicken boneless spicy",
      amount: 1,
    },
    {
      id: uuidv4(),
      name: "Orange juice with bits",
      amount: 2,
    },
    {
      id: uuidv4(),
      name: "Cucumber suomalainen",
      amount: 2,
    },
    {
      id: uuidv4(),
      name: "Fazer dark chocolate",
      amount: 1,
    },
  ];
  return randomData;
};
