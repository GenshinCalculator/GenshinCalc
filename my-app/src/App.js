import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import createProfile from './components/createProfile';
import Profile from './components/Profile';
import { storageAdd, storageGet } from './helpers/storageHelper';

function App() {
  const [localProfiles, setProfiles] = useState([]);

  useEffect(() => {
    const profilesJson = window.localStorage.getItem('profiles');
    if (profilesJson) {
      setProfiles(JSON.parse(profilesJson));
    }
  }, []);

  const onProfileChange = profile => {
    const profilesJson = storageGet('profiles');
    storageAdd('profiles', JSON.stringify([profile]));
  };

  return (
    <div className="App">
      {localProfiles && localProfiles[0] && (
        <Profile
          id={localProfiles[0].id}
          data={localProfiles[0]}
          onProfileChange={onProfileChange}
        ></Profile>
      )}
      <p></p>
      <Profile onProfileChange={onProfileChange}></Profile>
    </div>
  );
}

export default App;
