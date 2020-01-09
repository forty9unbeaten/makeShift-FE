import React from 'react';
import  MyMenu  from './react/components/MyMenu.js'
import MenuBody from './react/components/MyMenuBody.js'
import SearchBody from './react/components/Search.js'


function App() {
  return (
    <div>
      {/* <SearchBody /> */}
      <MyMenu />
      <MenuBody />
    </div>
  );
};

export default App;