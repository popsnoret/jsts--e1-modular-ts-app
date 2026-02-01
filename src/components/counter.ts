export function counter() {
  let counter = 0; // startvärde

  // ökar värdet
  function increase() {
    counter++;
  }

  // minskar värdet, ner till 0
  function decrease() {
    if (counter > 0) {
      counter--;
    }
  }

  // återställer värdet till 0
  function reset() {
    counter = 0;
  }

  // hämtar värdet
  function get() {
    return counter;
  }

  // gör så att funktionerna kan användas
  return { increase, decrease, reset, get };
}
