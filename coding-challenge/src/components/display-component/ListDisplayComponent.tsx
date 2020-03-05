import React from "react";
import IGroceryList from "../../model/IGroceryList";

export interface IListProps {
  list: IGroceryList;
}

export const ListDisplayComponent: React.FC<any> = (props: IListProps) => {
  return (
    <>
      <tr>
        <td>{props.list.listId}</td>
        <td>{props.list.date}</td>
        <td>{props.list.description}</td>
      </tr>
    </>
  );
};
