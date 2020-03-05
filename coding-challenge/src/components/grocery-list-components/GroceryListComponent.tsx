import React, { useState } from "react";
import IGroceryList from "../../model/IGroceryList";
import { Form, FormGroup, Label, Col, Input } from "reactstrap";
import { addList } from "../../utility/api";

interface IGroceryListProps {
  addList: (body: IGroceryList) => void;
  createMessage: string;
}

export const GroceryListComponent: React.FC<any> = (
  props: IGroceryListProps
) => {
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");

  return (
    <>
      <div className="general">
        <h2>Create a New Grocery List</h2>
        <Form
          className="groceryList"
          onSubmit={() =>
            addList({
              listId: 0,
              date: date,
              description: description
            }).then(r => console.log(r.data))
          }
        >
          <FormGroup row>
            <Label for="date" sm={2}>
              Date
            </Label>
            <Col sm={10}>
              <Input
                required
                type="date"
                name="date"
                id="date"
                placeholder="Date"
                onChange={val => setDate(new Date(val.target.value))}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="date" sm={2}>
              Date
            </Label>
            <Col sm={10}>
              <Input
                required
                type="textarea"
                name="description"
                id="description"
                placeholder="Description"
                onChange={val => setDescription(val.target.value)}
              />
            </Col>
          </FormGroup>
        </Form>
      </div>
    </>
  );
};
