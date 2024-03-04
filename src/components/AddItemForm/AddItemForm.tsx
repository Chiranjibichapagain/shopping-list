import { v4 as uuidv4 } from "uuid";
import { appStyles } from "../../styles";
import { Button } from "../Button";
import { Container } from "../Container";
import { Input } from "../Input";
import { T_NewItemFormProps } from "./types";

export const AddItemForm = (props: T_NewItemFormProps) => {
  const {
    newShoppingItem,
    handleChangeNewProduct,
    isItemReady,
    handleAddNewShoppingItem,
  } = props;
  return (
    <Container styles={appStyles.bodyContainerStyles}>
      <form>
        <Container styles={appStyles.addNewItemContainerStyles}>
          <Input
            styles={appStyles.inputStyles({ type: "product" })}
            type="text"
            name="name"
            placeholder="Product Name"
            value={newShoppingItem.name}
            required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeNewProduct(e.currentTarget)
            }
          />
          <Input
            styles={appStyles.inputStyles}
            type="number"
            name="amount"
            placeholder="Amount"
            min={1}
            value={newShoppingItem.amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeNewProduct(e.currentTarget)
            }
          />
          <Button
            disabled={!isItemReady}
            onClick={() =>
              handleAddNewShoppingItem({
                id: uuidv4(),
                name: newShoppingItem.name,
                amount: newShoppingItem.amount,
              })
            }
            styles={appStyles.buttonStyles}
          >
            Add
          </Button>
        </Container>
      </form>
    </Container>
  );
};
