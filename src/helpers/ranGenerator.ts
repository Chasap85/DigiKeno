export const generateRandomNumbers = (): number[] => {
  const numbers: number[] = [];

  for (let i = 0; i < 20; i++) {
    const randomNumber = Math.floor(Math.random() * 80) + 1;

    if (numbers.includes(randomNumber)) {
      i--;
      continue;
    }
    numbers.push(randomNumber);
  }

  return numbers;
};
