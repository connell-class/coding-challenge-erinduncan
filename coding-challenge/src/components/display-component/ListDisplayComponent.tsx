import React from "react";
import IGroceryList from "../../model/IGroceryList";

export interface IListProps {
  list: IGroceryList;
}

export const ListDisplayComponent: React.FC<IListProps> = (props: IListProps) => {
  return (
    <>
      <tr key={props.list.listId}>
        <td key={props.list.listId}>{props.list.listId}</td>
        <td>{props.list.date}</td>
        <td key={props.list.description}>{props.list.description}</td>
      </tr>
    </>
  );
};
