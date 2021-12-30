import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import LoginModal from './Component/LoginModal';
import ArticleWriteModal from './Component/articleWriteModal';

function App() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [articlesList, setArticleList] = useState([
    {
      articleTitle: "how to use TypeScript",
      articleContent: "well...",
      articleWriter: "kimcoding",
      articleAte: Date.now()
    }
  ])

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
            <div>
              <ArticleWriteModal articlesList={articlesList} setArticleList={setArticleList} />
            </div> : null}
            <div>
                  <div className="articleList"> 
                    <span>title</span>
                    <span>content</span>
                    <span>writer</span>
                    <span>createdAt</span>
                  </div>
              {articlesList.map((el, key)=> {
                return (
                  <div className="articleList" key={key}>
                    <span>{el.articleTitle}</span>
                    <span>{el.articleContent}</span>
                    <span>{el.articleWriter}</span>
                    <span>{el.articleAte}</span>
                  </div>
              )})}
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
