import IGroceryList from "../model/IGroceryList";
import axiosConfig from "./axiosConfig";

export const addList = (body: IGroceryList) => {
    return axiosConfig.post("/add", body);
}