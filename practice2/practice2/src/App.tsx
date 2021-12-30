import axios from 'axios';
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import TopNavigation from './Component/topNavigation';
import logoImg from './Component/logo.png';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  

  return (
    <div className="App">
      <TopNavigation isLogin={isLogin} setIsLogin={setIsLogin} />
      <h1>hello</h1>
    </div>
  );
}

export default App;
