import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import translate from '../helpers/translate';
import charProfile from '../models/characterProfile';
import { decimalToPercent } from '../helpers/stringHelper';
import { storageAdd } from '../helpers/storageHelper';
import {
  getElePower,
  getSpiralBuffs,
  getSubstatGrowth,
} from '../helpers/profileHelper';
import { v4 } from 'uuid';
import useWhyDidYouUpdate from '../hooks/whydidyouupdate';

const useInput = (id, initState = '', stringId, inputProps = {}) => {
  const intl = useIntl();
  const [state, setState] = useState(initState);

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
        size="3"
        value={state}
        {...inputProps}
      ></input>
    </span>
  );

  return [input, state, setState];
};

const useProfile = (initProfile = {}, onProfileChange) => {
  const [nameComponent, nameState] = useInput('name', initProfile.name, null, {
    size: '10',
    maxLength: '15',
  });
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
  const [critDmgComponent, critDmgState] = useInput(
    'critD',
    initProfile.critD ? initProfile.critD * 100 : '',
  );
  const [eleDmgComponent, eleDmgState] = useInput(
    'eleDmg',
    initProfile.percEle ? initProfile.percEle * 100 : '',
  );

  useWhyDidYouUpdate('Hello world', {
    baseAtkState,
    flatAtkState,
    percAtkState,
    critRateState,
    critDmgState,
    eleDmgState,
    onProfileChange,
  });

  useEffect(() => {
    const result = charProfile({
      name: nameState,
      baseAtk: parseInt(baseAtkState),
      flatAtk: parseInt(flatAtkState),
      percAtk: percAtkState / 100,
      critC: critRateState / 100,
      critD: critDmgState / 100,
      percEle: eleDmgState / 100,
    });

    onProfileChange(result);
  }, [
    nameState,
    baseAtkState,
    flatAtkState,
    percAtkState,
    critRateState,
    critDmgState,
    eleDmgState,
    onProfileChange,
  ]);

  const components = (
    <React.Fragment>
      {nameComponent}
      {baseAtkComponent}
      {flatAtkComponent}
      {percAtkComponent}
      {critRateComponent}
      {critDmgComponent}
      {eleDmgComponent}
    </React.Fragment>
  );

  return components;
};

const Profile = ({ id, data, onProfileChange }) => {
  const intl = useIntl();

  const [profileData, setProfileData] = useState(data);

  useWhyDidYouUpdate('Profile why update?', { onProfileChange, profileData });
  const onProfileUpdate = useCallback(
    profileModel => {
      if (!profileModel) return;

      setProfileData(profileModel);
      onProfileChange(id, profileModel); // This is hacky/inefficient.  Makes a v4 until the profile is saved
    },
    [id, onProfileChange],
  );
  const components = useProfile(data, onProfileUpdate);

  const getSubstatInfo = profile => {
    if (profile) {
      const { atkPercDiff, critRateDiff, critDmgDiff } = getSubstatGrowth(
        profile,
      );

      const max = Math.max(atkPercDiff, critRateDiff, critDmgDiff);
      let textKey = '';
      switch (max) {
        case atkPercDiff:
          textKey = 'profile.substat.atkPercGain';
          break;
        case critRateDiff:
          textKey = 'profile.substat.critRateGain';
          break;
        case critDmgDiff:
          textKey = 'profile.substat.critDmgGain';
          break;
        default:
          break;
      }
      const stat = translate(intl, textKey, { gain: decimalToPercent(max) });
      const info = translate(intl, 'profile.substat.best', { stat: stat });

      return info;
    }

    return null;
  };

  const getSpiralBuffInfo = () => {
    if (profileData) {
      const { critPercDiff, atk20Diff, atk30Diff, atk40Diff } = getSpiralBuffs(
        profileData,
      );

      let chamberBuffKey = '';
      const maxChamber = Math.max(
        critPercDiff,
        atk20Diff,
        atk30Diff,
        atk40Diff,
      );
      switch (maxChamber) {
        case critPercDiff:
          chamberBuffKey = 'profile.spiral.critBuffGain';
          break;
        case atk20Diff:
          chamberBuffKey = 'profile.spiral.atk20Gain';
          break;
        case atk30Diff:
          chamberBuffKey = 'profile.spiral.atk30Gain';
          break;
        case atk40Diff:
          chamberBuffKey = 'profile.spiral.atk40Gain';
          break;
        default:
          break;
      }

      let floorBuffKey = '';
      const maxFloor = Math.max(critPercDiff, atk20Diff);
      switch (maxFloor) {
        case critPercDiff:
          floorBuffKey = 'profile.spiral.critBuffGain';
          break;
        case atk20Diff:
          floorBuffKey = 'profile.spiral.atk20Gain';
          break;
        default:
          break;
      }

      const chamberBuff = translate(intl, chamberBuffKey, {
        gain: decimalToPercent(maxChamber),
      });
      const chamberBuffText = translate(intl, 'profile.spiral.chamberBuff', {
        buff: chamberBuff,
      });

      const floorBuff = translate(intl, floorBuffKey, {
        gain: decimalToPercent(maxFloor),
      });
      const floorBuffText = translate(intl, 'profile.spiral.floorBuff', {
        buff: floorBuff,
      });

      return (
        <React.Fragment>
          <div>{chamberBuffText}</div>
          <div> {floorBuffText}</div>
        </React.Fragment>
      );
    }

    return null;
  };

  return (
    <React.Fragment>
      <div>
        {components}
        <br />
        {profileData &&
          translate(intl, 'profile.summary.elePower', {
            power: getElePower(profileData),
          })}
        <br />
        {getSubstatInfo(profileData)}
        <br />
        {getSpiralBuffInfo()}
      </div>
    </React.Fragment>
  );
};

export default Profile;
