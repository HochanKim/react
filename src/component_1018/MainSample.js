import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Main() {
  const { user, login, logout } = useContext(UserContext);

  return (
    <main className="main">
      {user ? (
        <>
          <button onClick={logout}>로그아웃</button>
          <p>환영합니다!, {user.name}님! 로그인 됨.</p>     
        </>
      ) : (
        <>
          <button onClick={login}>로그인</button>
          <p>로그인하셈.</p>         
        </>
      )}
    </main>
  );
}

export default Main;