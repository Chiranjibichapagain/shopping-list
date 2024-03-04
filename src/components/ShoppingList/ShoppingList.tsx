import { appStyles } from "../../styles";
import { T_ShoppingListItem } from "../../types";
import { Container } from "../Container";
import { T_ShoppingListProps } from "./types";
import { Image } from "../Image";
import { Input } from "../Input";
import { Font } from "../Font";
import { Button } from "../Button";
import saveIcon from "../../assets/check.png";
import editIcon from "../../assets/pencil.svg";

export const ShoppingList = (props: T_ShoppingListProps) => {
  const {
    data,
    editProduct,
    setEditProduct,
    handleUpdateItem,
    shoppingItemChange,
    handleChangeUpdateProduct,
    handleRemoveItemFromList,
  } = props;
  return (
    <Container styles={appStyles.bodyContainerStyles}>
      {data.map((item: T_ShoppingListItem) => (
        <Container key={item.id} styles={appStyles.shoppingListItemStyles}>
          {item.id === editProduct ? (
            <Image
              onClick={() => {
                handleUpdateItem({
                  id: item.id,
                  name: shoppingItemChange.newName,
                  amount: shoppingItemChange.newAmount,
                });
                setEditProduct("");
              }}
              styles={appStyles.iconStyles}
              src={saveIcon}
              alt="check-icon"
            />
          ) : (
            <Image
              styles={appStyles.iconStyles}
              src={editIcon}
              alt="pencil-icon"
              onClick={() => setEditProduct(item.id)}
            />
          )}
          {item.id === editProduct ? (
            <Input
              styles={appStyles.inputStyles({ type: "product" })}
              type="text"
              name="newName"
              placeholder="Product Name"
              defaultValue={item.name}
              required={true}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeUpdateProduct(e.currentTarget)
              }
            />
          ) : (
            <Font
              styles={appStyles.shoppingListTextStyles({ type: "product" })}
            >
              {item.name}
            </Font>
          )}
          {item.id === editProduct ? (
            <Input
              styles={appStyles.inputStyles}
              type="number"
              name="newAmount"
              placeholder="Amount"
              min={1}
              defaultValue={item.amount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeUpdateProduct(e.currentTarget)
              }
            />
          ) : (
            <Font styles={appStyles.shoppingListTextStyles}>{item.amount}</Font>
          )}
          <Button
            onClick={() => handleRemoveItemFromList(item.id)}
            styles={appStyles.buttonStyles}
          >
            remove
          </Button>
        </Container>
      ))}
    </Container>
  );
};
