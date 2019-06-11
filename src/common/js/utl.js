function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export function shuffle(arr) {
  const Arr = arr.slice(0);
  for (let i = 0; i < arr.length; i++) {
    const j = getRandomInt(0, i);
    const t = Arr[i];
    Arr[i] = Arr[j];
    Arr[j] = t;
  }
  return Arr;
}

// 函数防抖
export function debounce(func, delay) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
