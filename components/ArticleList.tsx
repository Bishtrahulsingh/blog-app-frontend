import React from 'react'
import { IArticle } from '@/types';
import Blogcard from './Blogcard';
import Blogcardcolor from './Blogcardcolor';
interface IPropType{
    articles: IArticle[];
}

const ArticleList = ({articles}:IPropType) => {
  return (
    <div className='px-2 md:px-0 lg:grid lg:grid-cols-2 lg:gap-10'>
        {articles.map((article,idx)=>{
            return (
                <div className='my-7 lg:my-3' key={article.id}>
                    {
                        idx===1 ?< Blogcardcolor article={article}/>:<Blogcard  article={article}/>
                    }
                </div>
                )
        })}
    </div>
  )
}

export default ArticleList