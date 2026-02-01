// En lista som kommer ihåg vilket godis användaren har lagt i påsen

type State = {
  cart: string[];
};

const state: State = {
  cart: [],
};

// Ger tillbaka hela listan med valt godis
export function getCart() {
  return state.cart;
}

// Lägger till ett nytt godis i listan
export function addToCart(item: string) {
  state.cart.push(item);
}

// Räknar hur många godisar som finns i listan
export function cartCount() {
  return state.cart.length;
}
