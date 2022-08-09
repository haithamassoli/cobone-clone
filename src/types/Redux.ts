/* eslint-disable */

export interface CartState {
  cart: Cart[];
}

type Cart = {
  id: number;
  quantity: number;
};
