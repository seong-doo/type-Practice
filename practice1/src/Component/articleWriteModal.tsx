import React, { useState } from 'react';

interface articleProps {
    articlesList: [];
    setArticleList: any;
}


const ArticleWriteModal: React.FunctionComponent<articleProps> = (props) => {
    const [articleInfo, setArticleInfo] = useState<object>({
      articleTitle: "",
      articleContent: "",
      articleWriter: "kimcoding",
      articleAte: Date.now()
        
    })


    const handleArticle = (key:string) => (e:any) => {
        setArticleInfo({ ...articleInfo, [key]: e.target.value });
    };

    const postArticle = () => {
        props.setArticleList([...props.articlesList, articleInfo])
    }

    return (
        <form>
            <input placeholder="title" onChange={handleArticle('articleTitle')} />
            <input placeholder="content" onChange={handleArticle('articleContent')} />
            <button type='button' onClick={postArticle}>Post</button>
        </form>
    )
}

export default ArticleWriteModal 