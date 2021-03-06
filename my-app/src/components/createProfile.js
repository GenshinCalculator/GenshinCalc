import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import translate from '../helpers/translate';
import charProfile from '../models/characterProfile';
import { decimalToPercent } from '../helpers/stringHelper';

const useInput = (id, initState = '', stringId) => {
  const intl = useIntl();
  const [state, setState] = useState(initState);

  console.log(id, state, initState);

  const onChange = e => {
    setState(e.currentTarget.value);
  };
  const key = stringId ? stringId : 'profile.' + id;
  const name = translate(intl, key);
  const input = (
    <span>
      {name}
      <input
        type="text"
        id={id}
        name={id}
        onChange={onChange}
        maxLength="7"
        size="5"
        value={state}
      ></input>
    </span>
  );

  return [input, state, setState];
};

const useProfile = (initProfile = {}) => {
  const [profile, setProfile] = useState(null);

  const [baseAtkComponent, baseAtkState] = useInput(
    'baseAtk',
    initProfile.baseAtk,
  );
  const [flatAtkComponent, flatAtkState] = useInput(
    'flatAtk',
    initProfile.flatAtk,
  );
  const [percAtkComponent, percAtkState] = useInput(
    'percAtk',
    initProfile.percAtk ? initProfile.percAtk * 100 : '',
  );
  const [critRateComponent, critRateState] = useInput(
    'critC',
    initProfile.critC ? initProfile.critC * 100 : '',
  );
  const [critDmgComponent, critDmgState] = useInput('critD', initProfile.critD);
  const [eleDmgComponent, eleDmgState] = useInput(
    'eleDmg',
    initProfile.percEle ? initProfile.percEle * 100 : '',
  );

  useEffect(() => {
    const result = charProfile({
      baseAtk: parseInt(baseAtkState),
      flatAtk: parseInt(flatAtkState),
      percAtk: percAtkState / 100,
      critC: critRateState / 100,
      critD: critDmgState / 100,
      percEle: eleDmgState / 100,
    });

    if (result) setProfile(result);
  }, [
    baseAtkState,
    flatAtkState,
    percAtkState,
    critRateState,
    critDmgState,
    eleDmgState,
    setProfile,
  ]);

  const components = (
    <React.Fragment>
      {baseAtkComponent}
      {flatAtkComponent}
      {percAtkComponent}
      {critRateComponent}
      {critDmgComponent}
      {eleDmgComponent}
    </React.Fragment>
  );

  return [profile, components];
};

const getSpiralBuffs = profile => {};
const getBestFloorBuff = profile => {};
const getBestChamberBuff = profile => {};

const getSubstatGrowth = profile => {
  // const intl = useIntl();
  // if (profile) {
  //   const { atkPercDiff, critRateDiff, critDmgDiff } = profile.substats;

  //   const max = Math.max(atkPercDiff, critRateDiff, critDmgDiff);
  //   let textKey = '';
  //   switch (max) {
  //     case atkPercDiff:
  //       textKey = 'profile.substat.atkPercGain';
  //       break;
  //     case critRateDiff:
  //       textKey = 'profile.substat.critRateGain';
  //       break;
  //     case critDmgDiff:
  //       textKey = 'profile.substat.critDmgGain';
  //       break;
  //     default:
  //       break;
  //   }
  //   const stat = translate(intl, textKey, { gain: decimalToPercent(max) });
  //   const substat = translate(intl, 'profile.substat.best', { stat: stat });

  //   return substat;
  // }

  return null;
};

const createProfile = initProfile => {
  // const intl = useIntl();
  // const [profile, components] = useProfile(initProfile);
  // if (profile) {
  //   console.log('saving profile!');
  //   window.localStorage.setItem('profileId', JSON.stringify([profile]));
  // }
  // return (
  //   <React.Fragment>
  //     {components}
  //     {profile &&
  //       translate(intl, 'profile.summary.elePower', {
  //         power: profile.elePower,
  //       })}
  //     <br />
  //     {getSubstatGrowth(profile)}
  //   </React.Fragment>
  // );
};

export default createProfile;
