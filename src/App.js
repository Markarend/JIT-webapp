import React from 'react';
import IpList from './IpAddr';
import GetUser from './Users';
import GetSettings from './UserSettings';

function App() {

  var ip = IpList();
  var user = GetUser();
  var userSettings = GetSettings();
  //var userSettingsString = JSON.stringify(userSettings);

  var msg = <div>1048 You are { user.userDetails } at {ip}</div>;
  //msg += <div>Settings: { userSettingsString }</div>;

  return ( msg );
}

export default App;
