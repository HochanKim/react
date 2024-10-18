import React, { useState } from 'react';
import PageSample from './component_1018/PageSample';
import { UserContext } from './context/UserContext';

function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: '홍길동', email: 'hong@naver.com' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div className="app">
    <UserContext.Provider value={{ user, login, logout }}>    
        <PageSample />  
    </UserContext.Provider>
    </div>
  );
}

export default App;
