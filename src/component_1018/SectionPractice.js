import React, { useContext } from 'react';

function Main() {
  // const { user, login, logout } = useContext(UserContext);

  return (
    <main className="main" style={{background : '#666', color : '#fff', height : '80px', padding : '20px 0'}}>
      {/* {user ? (
        <>
          <button onClick={logout}>로그아웃</button>
          <p>환영합니다!, {user.name}님! 로그인 됨.</p>     
        </>
      ) : (
        <>
          <button onClick={login}>로그인</button>
          <p>로그인하셈.</p>         
        </>
      )} */}
      <p>현재 색상 모드 : dark</p>
    </main>
  );
}

export default Main;