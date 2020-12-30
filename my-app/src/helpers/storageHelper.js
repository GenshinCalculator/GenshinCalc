export const addProfile = (id, profile) => {};

export const storageGet = id => {
  window.locationStorage.getItem(id);
};

export const storageAdd = (id, item) => {
  window.localStorage.setItem(id, item);
};

export const storageDelete = id => {
  window.localStorage.removeItem(id);
};
