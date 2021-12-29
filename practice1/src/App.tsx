import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import LoginModal from './Component/LoginModal';

function App() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);


  const clickLogin = () => {
    setIsModalVisible(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={clickLogin}>login</button>
        <div>
          <LoginModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} setIsLogin={setIsLogin} />
        </div>
        <div>
          {isLogin ? 
          <div>로그인 성공</div> : null}
        </div>
      </header>
    </div>
  );
}

export default App;
