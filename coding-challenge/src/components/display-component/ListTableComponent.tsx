import React from "react";
import IGroceryList from "../../model/IGroceryList";
import { ListDisplayComponent } from "./ListDisplayComponent";
import { Table } from "reactstrap";
import { useEffect, useState } from "react";
import { getList } from "../../utility/api";
import { Link } from "react-router-dom";

export const ListTableComponent: React.FC<any> = (props: any) => {
  const [listList, setListList] = useState([]);
  useEffect(() => {
    getList().then(r => setListList(r.data));
  }, [listList.length]);

  return (
    <div className="general">
      <Table striped>
        <thead>
          <tr>
            <th>List ID</th>
            <th>List Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {listList.map((r: IGroceryList) => (
            <ListDisplayComponent batch={r} />
          ))}
        </tbody>
      </Table>
      <br />
      <Link to="/newlist">New List</Link>
    </div>
  );
};

export default ListTableComponent;
