/* eslint-disable */

export interface CartState {
  cart: Cart[];
}

export type Cart = {
  id: number;
  quantity: number;
};
