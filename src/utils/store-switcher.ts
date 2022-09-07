const localStorageKey = 'store';

export const SupportedStores = ['redux', 'recoil', 'zustand'] as const;

export const initialStore = localStorage.getItem(localStorageKey) || SupportedStores[0];

export const setStore = (store: string) => {
  localStorage.setItem(localStorageKey, store);
  window.location.reload();
};
