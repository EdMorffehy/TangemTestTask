export const getLocalStorage = <R>(key: string): R | null => {
  const result = localStorage.getItem(key);

  if (!result) return null;

  return JSON.parse(result) as R;
};

export const setLocalStorage = (key: string, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = (): void => {
  localStorage.clear();
};
