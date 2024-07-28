export function getRandomNumber(from: number, to: number): number {
  return Math.random() * (to - from) + from
}
