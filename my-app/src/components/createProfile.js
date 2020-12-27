import React, { useEffect, useState } from 'react';
import charProfile from '../models/characterProfile';

const useInput = (id, stringId) => {
  const [state, setState] = useState('');
  const onChange = e => {
    setState(e.currentTarget.value);
  };
  const name = stringId ? stringId : 'profile.' + id;
  const input = (
    <span>
      {name}
      <input type="text" id={id} name={id} onChange={onChange}></input>
    </span>
  );

  return [input, state];
};

const useProfile = () => {
  const [profile, setProfile] = useState(null);

  const [baseAtkComponent, baseAtkState] = useInput('baseAtk');
  const [flatAtkComponent, flatAtkState] = useInput('flatAtk');
  const [percAtkComponent, percAtkState] = useInput('percAtk');
  const [critRateComponent, critRateState] = useInput('critC');
  const [critDmgComponent, critDmgState] = useInput('critD');
  const [eleDmgComponent, eleDmgState] = useInput('eleDmg');

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

const createProfile = () => {
  const [profile, components] = useProfile();

  console.log('profile:', profile);

  return (
    <React.Fragment>
      {components}
      {profile && 'YOUR ELE POWER IS: ' + profile.elePower}
    </React.Fragment>
  );
};

export default createProfile;
