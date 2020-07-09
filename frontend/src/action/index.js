export const INCREMENT = "INCREMENT";
export const ASSIGN_DIV = "ASSIGN_DIV";
const CLICK = "CLICK";

export function assignDiv() {
  return { type: ASSIGN_DIV };
}

export function click() {
  return { type: CLICK };
}

// export const decrement = () => ({ type: DECREMENT });
