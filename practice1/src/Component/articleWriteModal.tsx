import React, { useState } from 'react';

interface articleProps {
    articlesList: {
        articleTitle: string;
        articleContent: string;
        articleWriter: string;
        articleAte: number;
    }[]
    ;
    setArticleList: React.Dispatch<React.SetStateAction<{
        articleTitle: string;
        articleContent: string;
        articleWriter: string;
        articleAte: number;
    }[]>>
    ;
}


function ArticleWriteModal( props:articleProps )  {
    const [articleInfo, setArticleInfo] = useState({
      articleTitle: "",
      articleContent: "",
      articleWriter: "kimcoding",
      articleAte: Date.now()
    })


    function handleArticle (e:React.ChangeEvent<HTMLInputElement>, key:string) {
        setArticleInfo({ ...articleInfo, [key]: e.target.value });
    };

    const postArticle = () => {

        props.setArticleList([...props.articlesList, articleInfo])
    }

    function controlRating (e:React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
        }

    return (
        <div>
            <div className="star-rating space-x-4 mx-auto">
                <input type="radio" id="5-stars" name="rating" value="5" v-model="ratings" onChange={(e)=>controlRating(e)} />
                <label htmlFor="5-stars" className="star pr-4">★</label>
                <input type="radio" id="4-stars" name="rating" value="4" v-model="ratings" onChange={(e)=>controlRating(e)} />
                <label htmlFor="4-stars" className="star">★</label>
                <input type="radio" id="3-stars" name="rating" value="3" v-model="ratings" onChange={(e)=>controlRating(e)} />
                <label htmlFor="3-stars" className="star">★</label>
                <input type="radio" id="2-stars" name="rating" value="2" v-model="ratings" onChange={(e)=>controlRating(e)} />
                <label htmlFor="2-stars" className="star">★</label>
                <input type="radio" id="1-star" name="rating" value="1" v-model="ratings" onChange={(e)=>controlRating(e)} />
                <label htmlFor="1-star" className="star">★</label>
            </div>
            <form>
                <input placeholder="title" onChange={(e)=> handleArticle(e, 'articleTitle')} />
                <input placeholder="content" onChange={(e) => handleArticle(e, 'articleContent')} />
                <button type='button' onClick={postArticle}>Post</button>
            </form>
        </div>
    )
}

export default ArticleWriteModal 