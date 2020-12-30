const PROFILES_KEY = 'profiles';

export const getStorageProfiles = () => {
  const profilesJson = window.localStorage.getItem(PROFILES_KEY);
  return profilesJson ? JSON.parse(profilesJson) : {};
};

export const addStorageProfile = (id, profile) => {
  const profiles = getStorageProfiles();
  console.log('old profiles', profiles);
  console.log('[new id, profile]', id, profile);
  profiles[id] = profile;
  storageAdd(PROFILES_KEY, JSON.stringify(profiles));
};

export const storageGet = id => {
  window.localStorage.getItem(id);
};

export const storageAdd = (id, item) => {
  window.localStorage.setItem(id, item);
};

export const storageDelete = id => {
  window.localStorage.removeItem(id);
};
