/* eslint-disable */
export type cart = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export interface CartState {
  cart: cart[];
}
