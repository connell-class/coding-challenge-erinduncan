import IGroceryList from "../model/IGroceryList";
import axiosConfig from "./axiosConfig";

export const addList = (body: IGroceryList) => {
    return axiosConfig.post("list/add", body);
}

export const getList = () => {
    return axiosConfig.get("list/all");
}