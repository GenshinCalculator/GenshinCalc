import { useEffect, useState } from 'react';
import { v4 as uuidv4, v4 } from 'uuid';
import './App.css';
import createProfile from './components/createProfile';
import Profile from './components/Profile';
import { addStorageProfile, getStorageProfiles } from './helpers/storageHelper';

function App() {
  const [localProfiles, setProfiles] = useState({});

  useEffect(() => {
    const profiles = getStorageProfiles();
    if (profiles) setProfiles(profiles);
  }, []);

  const onProfileChange = (id, profile) => {
    const profilesJson = getStorageProfiles();
    let objectToStore = {};
    objectToStore[id] = profile;
    addStorageProfile(id, profile);
  };

  const getProfilesList = () => {
    const keys = Object.keys(localProfiles);
    return keys.map(key => {
      return (
        <Profile
          key={key}
          id={key}
          data={localProfiles[key]}
          onProfileChange={onProfileChange}
        ></Profile>
      );
    });
  };

  return (
    <div className="App">
      {getProfilesList()}
      <p></p>
      {/* TODO:  Button to make a new profile */}
      <Profile id={v4()} onProfileChange={onProfileChange}></Profile>
    </div>
  );
}

export default App;
