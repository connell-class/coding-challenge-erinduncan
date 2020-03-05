export enum categoryEnum {
  PRODUCE,
  MEAT,
  CANNED_GOODS,
  FROZEN,
  HOUSEHOLD
}

export interface Item {
  itemId: number;
  name: string;
  price: number;
  category: categoryEnum;
}

export interface List {
  listId: number;
  quantity: number;
}

export type ItemState = {
  items: Item[];
  list: List[];
};

const initialState: ItemState = {
  items: [],
  list: []
};

export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P };
export function typedAction(type: string, payload?: any) {
  return { type, payload };
}

const addItems = (items: Item[]) => {
  return typedAction("add", items);
};

export const addToList = (item: Item, quantity: number) => {
  return typedAction("addtolist", { item, quantity });
};
