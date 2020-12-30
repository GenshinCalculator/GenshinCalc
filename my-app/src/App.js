import { useEffect, useState } from 'react';
import './App.css';
import createProfile from './components/createProfile';
import Profile from './components/Profile';

function App() {
  const [localProfiles, setProfiles] = useState([]);

  useEffect(() => {
    const profilesJson = window.localStorage.getItem('profileId');
    if (profilesJson) {
      console.log('reading profile:', profilesJson);
      setProfiles(JSON.parse(profilesJson));
    } else {
      setProfiles([]);
    }
  }, []);

  // console.log('localProfiles:', localProfiles);

  return (
    <div className="App">
      {localProfiles && localProfiles[0] && (
        <Profile data={localProfiles[0]}></Profile>
      )}
      {/* {localProfiles && localProfiles[1] && (
        <Profile data={localProfiles[1]}></Profile>
      )}
      <Profile></Profile> */}
    </div>
  );
}

export default App;
