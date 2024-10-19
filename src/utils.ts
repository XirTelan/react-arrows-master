export function getUid() {
  return Math.random().toString(16).slice(2);
}

export function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
