import { useEffect, useState } from "react";

import { appStyles } from "./styles";
import { Container } from "./components/Container";
import { Image } from "./components/Image";
import logo from "./assets/shopping-list.png";
import { Font } from "./components/Font";
import { generateRandomProducts } from "./utils";
import { T_ShoppingListItem } from "./types";
import { useForm } from "./useForm";
import { AddItemForm } from "./components/AddItemForm";
import { ShoppingList } from "./components/ShoppingList";

function App() {
  const {
    newShoppingItem,
    setNewShoppingItem,
    shoppingItemChange,
    setShoppingItemChange,
  } = useForm();

  const [editProduct, setEditProduct] = useState<string>("");
  const [data, setData] = useState<T_ShoppingListItem[]>([]);
  const [isItemReady, setIsItemReady] = useState<boolean>(false);

  const date: string = new Date().toLocaleDateString().slice(0, 10);

  useEffect(() => {
    const randomData: T_ShoppingListItem[] = generateRandomProducts();
    setData(randomData);
  }, []);

  useEffect(() => {
    newShoppingItem.amount && newShoppingItem
      ? setIsItemReady(true)
      : setIsItemReady(false);
  }, [newShoppingItem]);

  const handleChangeUpdateProduct = (e: EventTarget & HTMLInputElement) => {
    setShoppingItemChange({ ...shoppingItemChange, [e.name]: e.value });
  };
  const handleChangeNewProduct = (e: EventTarget & HTMLInputElement) => {
    setNewShoppingItem({ ...newShoppingItem, [e.name]: e.value });
  };

  const handleAddNewShoppingItem = (newProduct: T_ShoppingListItem) => {
    const newItem: T_ShoppingListItem = {
      id: newProduct.id,
      name: newProduct.name,
      amount: newProduct.amount,
    };
    setData((prevState) => prevState.concat(newItem));
    setNewShoppingItem({ name: "", amount: "" });
  };

  const handleRemoveItemFromList = (id: string) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  const handleUpdateItem = (updateData: T_ShoppingListItem) => {
    const updatedData = data.map((item) => {
      if (item.id === updateData.id) {
        const name = updateData.name ? updateData.name : item.name;
        const amount = updateData.amount ? updateData.amount : item.amount;
        return {
          ...item,
          name: name,
          amount: amount,
        };
      }
      return item;
    });
    setData(updatedData);
  };

  return (
    <Container styles={appStyles.appRootStyles}>
      <Container styles={appStyles.appBodyStyles}>
        <Container styles={appStyles.headerStyles}>
          <Image
            src={logo}
            alt="shopping-list-logo"
            styles={appStyles.logoStyles}
          />
          <Font styles={appStyles.appNameStyles}>Shopping List</Font>
        </Container>
        <Font
          styles={appStyles.headingStyles({ align: "center" })}
        >{`Shopping List  - ${date}`}</Font>
        <hr style={{ width: "100%" }} />
        <ShoppingList
          data={data}
          editProduct={editProduct}
          setEditProduct={setEditProduct}
          handleUpdateItem={handleUpdateItem}
          shoppingItemChange={shoppingItemChange}
          handleChangeUpdateProduct={handleChangeUpdateProduct}
          handleRemoveItemFromList={handleRemoveItemFromList}
        />

        <Font styles={appStyles.headingStyles}>Add new products</Font>
        <hr style={{ width: "100%" }} />
        <AddItemForm
          newShoppingItem={newShoppingItem}
          handleChangeNewProduct={handleChangeNewProduct}
          isItemReady={isItemReady}
          handleAddNewShoppingItem={handleAddNewShoppingItem}
        />

        <Font styles={appStyles.appTextStyles}>
          © Chiranjibi Chapagain 2024
        </Font>
      </Container>
    </Container>
  );
}

export default App;
