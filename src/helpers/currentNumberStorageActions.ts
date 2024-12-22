import { Ref } from 'vue';

export const getCurrentNumberFromLS = () => {
  const currentNumber = localStorage.getItem('currentNumber');
  return currentNumber ? (JSON.parse(currentNumber) as string) : '';
};

export const updateCurrentNumberRef = (currentNumber: Ref<string>) => {
  currentNumber.value = getCurrentNumberFromLS();
};

export const setCurrentNumberLS = (currentNumber: string) => {
  localStorage.setItem('currentNumber', JSON.stringify(currentNumber));
};

export const resetCurrentNumberLS = () => {
  localStorage.setItem('currentNumber', JSON.stringify(''));
};
