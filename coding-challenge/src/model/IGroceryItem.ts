export enum categoryEnum {
  PRODUCE = "PRODUCE",
  MEAT = "MEAT",
  CANNED_GOODS = "CANNED_GOODS",
  FROZEN = "FROZEN",
  HOUSEHOLD = "HOUSEHOLD"
}

export default interface IGroceryItem {
  itemId: number;
  name: string;
  price: number;
  category: any;
}
