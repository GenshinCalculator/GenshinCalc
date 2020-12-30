export const getElePower = profile => {
  const { baseAtk, percAtk, flatAtk, critC, critD, percEle } = profile;
  const artifactAtk = baseAtk * percAtk + flatAtk;
  const sheetAtk = baseAtk + artifactAtk;
  const critPower = 1 + Math.min(1, critC) * critD;
  const elePower = Math.round(sheetAtk * critPower * (1 + percEle));

  return elePower;
};

export const getSpiralBuffs = profile => {
  const { percAtk, critC, critD } = profile;
  const basePow = getElePower(profile);

  const critBuffPow = getElePower({
    ...profile,
    critC: critC + 0.08,
    critD: critD + 0.15,
  });

  const atk20Pow = getElePower({
    ...profile,
    percAtk: percAtk + 0.2,
  });

  const atk30Pow = getElePower({
    ...profile,
    percAtk: percAtk + 0.3,
  });

  const atk40Pow = getElePower({
    ...profile,
    percAtk: percAtk + 0.4,
  });

  return {
    critPercDiff: critBuffPow / basePow - 1,
    atk20Diff: atk20Pow / basePow - 1,
    atk30Diff: atk30Pow / basePow - 1,
    atk40Diff: atk40Pow / basePow - 1,
  };
};

export const getSubstatGrowth = profile => {
  const { baseAtk, percAtk, flatAtk, critC, critD, percEle } = profile;
  const basePow = getElePower(profile);

  const atkPercSubPow = getElePower({
    ...profile,
    percAtk: percAtk + 0.0498,
  });

  const critRateSubPow = getElePower({
    ...profile,
    critC: critC + 0.033,
  });

  const critDmgSubPow = getElePower({
    ...profile,
    critD: critD + 0.066,
  });

  return {
    atkPercDiff: atkPercSubPow / basePow - 1,
    critRateDiff: critRateSubPow / basePow - 1,
    critDmgDiff: critDmgSubPow / basePow - 1,
  };
};
