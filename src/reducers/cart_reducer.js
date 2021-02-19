import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cart_reducer = (state, action) => {
  // add to cart
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;

    // below statement basically means find the item which has been added to added to cart(if item.id === id + color, its been added)
    const tempItem = state.cart.find((item) => item.id === id + color);

    // ************************ check if item exists in cart (adding again)
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        // ---------------------------- cart item does exist in cart but here we find the item which is being added to cart again since there may be multiple items in cart
        if (cartItem.id === id + color) {
          // increase amount to existing amount in cart + new amount added
          let newAmount = cartItem.amount + amount;
          // check if amount exceeds over stock
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return {
            ...cartItem,
            amount: newAmount,
          };
        }
        // ---------------------------- if the cart item doesn't match the selected item, return cart item as it is
        else {
          return cartItem;
        }
      });

      return {
        ...state,
        cart: tempCart,
      };
    }
    // ************************ create item if its not in cart (adding first time)
    else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }
  }

  // remove cart item
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: tempCart,
    };
  }

  // clear cart
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }

  // toggle item amount in cart
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;

    const tempCart = state.cart.map((item) => {
      // if cart item matches the clicked item
      if (item.id === id) {
        // if increase btn is clicked
        if (value === 'inc') {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return {
            ...item,
            amount: newAmount,
          };
        }
        // if increase btn is clicked
        if (value === 'dec') {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return {
            ...item,
            amount: newAmount,
          };
        }
      }
      // if cart item does not match the clicked item
      else {
        return item;
      }
    });

    return {
      ...state,
      cart: tempCart,
    };
  }

  // calculate cart totals
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount += amount * price;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return {
      ...state,
      total_items,
      total_amount,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
