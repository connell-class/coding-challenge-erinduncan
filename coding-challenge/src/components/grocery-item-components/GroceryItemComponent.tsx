import React from "react";
import IGroceryItem, { categoryEnum } from "../../model/IGroceryItem";
import { useState } from "react";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { addItem } from "../../utility/api";

interface IGroceryItemProps {
  addItem: (body: IGroceryItem) => void;
  createMessage: string;
}

export const GroceryItemComponent: React.FC<any> = (
  props: IGroceryItemProps
) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  return (
    <>
      <div className="general">
        <h2>Add a New Item to the Database</h2>
        <Form
          className="groceryItem"
          onSubmit={() =>
            addItem({
              itemId: 0,
              name: name,
              price: price,
              category: category
            }).then(r => console.log(r.data))
          }
        >
          <FormGroup row>
            <Label for="name" sm={2}>
              Item Name
            </Label>
            <Col sm={10}>
              <Input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Item Name"
                onChange={val => setName(val.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="price" sm={2}>
              Price
            </Label>
            <Col sm={10}>
              <Input
                required
                type="number"
                min="0.01"
                step="0.01"
                name="price"
                id="price"
                placeholder="Price"
                onChange={val => setPrice(val.target.valueAsNumber)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="category" sm={2}>
              Item Category
            </Label>
            <Col sm={10}>
              <Input
                type="select"
                name="category"
                id="category"
                onChange={val => setCategory(val.target.value)}
              >
                <option selected disabled>
                  Select A Category
                </option>
                <option value={categoryEnum.PRODUCE}>Produce</option>
                <option value={categoryEnum.MEAT}>Meat</option>
                <option value={categoryEnum.CANNED_GOODS}>Canned Goods</option>
                <option value={categoryEnum.FROZEN}>Frozen</option>
                <option value={categoryEnum.HOUSEHOLD}>Household</option>
              </Input>
            </Col>
          </FormGroup>
          <Button color="btn btn-outline-secondary" type="submit">
            Submit
          </Button>
        </Form>
        <br />
        <Link to="/lists">View Lists</Link>
      </div>
    </>
  );
};
