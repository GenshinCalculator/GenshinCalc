import { v4 as uuidv4 } from 'uuid';

const charProfile = data => {
  if (!data) return null;
  const { name, baseAtk, flatAtk, percAtk, critC, critD, percEle } = data;

  if (!baseAtk || !flatAtk || !percAtk || !critC || !critD || !percEle)
    return null;

  const profile = {
    name,
    baseAtk,
    flatAtk,
    percAtk: percAtk,
    critC: critC,
    critD: critD,
    percEle: percEle,
  };

  return profile;
};

export default charProfile;
