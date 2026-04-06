import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type CartItem = {
  id: string | number;
  title: string;
  price: number;
  oldPrice?: number;
  quantity: number;

  // ✅ ADD THESE
  category?: string;
  subCategory?: string;
  subcategory?: string;

  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};

type InitialState = {
  items: CartItem[];
};

const initialState: InitialState = {
  items: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ Add Item
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (cartItem) => String(cartItem.id) === String(item.id)
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        // ✅ Full object push so category/subCategory bhi save ho
        state.items.push({
          ...item,
        });
      }
    },

    // ✅ Remove Item
    removeItemFromCart: (state, action: PayloadAction<string | number>) => {
      const itemId = action.payload;

      state.items = state.items.filter(
        (item) => String(item.id) !== String(itemId)
      );
    },

    // ✅ Update Quantity
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ id: string | number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;

      const existingItem = state.items.find(
        (item) => String(item.id) === String(id)
      );

      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },

    // ✅ Clear Cart
    removeAllItemsFromCart: (state) => {
      state.items = [];
    },
  },
});

export const selectCartItems = (state: RootState) => state.cartReducer.items;

export const selectTotalPrice = createSelector([selectCartItems], (items) => {
  return items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateCartItemQuantity,
  removeAllItemsFromCart,
} = cart.actions;

export default cart.reducer;