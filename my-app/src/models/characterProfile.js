const charProfile = data => {
  if (!data) return null;
  const { baseAtk, flatAtk, percAtk, critC, critD, percEle } = data;

  console.log('data:', data);

  if (!baseAtk || !flatAtk || !percAtk || !critC || !critD || !percEle)
    return null;

  const artifactAtk = baseAtk * percAtk + flatAtk;
  const sheetAtk = baseAtk + artifactAtk;
  const critPower = 1 + critC * critD;
  console.log('sheetAtk:', sheetAtk);
  console.log('critPower:', critPower);
  const elePower = Math.round(sheetAtk * critPower * (1 + percEle));

  return {
    baseAtk,
    flatAtk,
    percAtk: percAtk,
    critC: critC,
    critD: critD,
    percEle: percEle,
    elePower,
  };

  //   return {
  //     charId,
  //     level,
  //     baseAtk,
  //     atkPerc,
  //     flatAtk,
  //     critC,
  //     critD,
  //     elePerc,
  //     phyPerc,
  //   };
};

export default charProfile;
