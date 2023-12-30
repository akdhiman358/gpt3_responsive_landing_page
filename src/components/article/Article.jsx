import React from 'react'
import './article.css'

function Article({imgUrl,text,date}) {
  return (
    <div className='gpt3__article'>
      <div className='gpt3__article-image'>
        <img src={imgUrl} alt="Blog Article" />
      </div>
      <div className='gpt3__article-content'>
        <div>
          <h3>{date}</h3>
          <p>{text}</p>
        </div>
      <p>Read full Article</p>
      </div>
    </div>
  )
}

export default Article