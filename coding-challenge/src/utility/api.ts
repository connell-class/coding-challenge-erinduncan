import IGroceryList from "../model/IGroceryList";
import IGroceryItem from "../model/IGroceryItem";
import axiosConfig from "./axiosConfig";

export const addList = (body: IGroceryList) => {
  return axiosConfig.post("list/new", body);
};

export const getList = () => {
  return axiosConfig.get("list/all");
};

export const addItem = (body: IGroceryItem) => {
  return axiosConfig.post("item/add", body);
};

export const getItem = () => {
  return axiosConfig.get("item/all");
};

export const getItemById = () => {
  return axiosConfig.get("/item/{id}");
};

export const updateItem = (body: IGroceryItem) => {
  return axiosConfig.put("item/update", body);
};

export const updateItemById = (body: IGroceryItem) => {
  return axiosConfig.put("item/updatebyid", body);
};

export const deleteItem = () => {
  return axiosConfig.delete("item/delete");
};

export const deleteItemById = () => {
  return axiosConfig.delete("item/deletebyid");
};
