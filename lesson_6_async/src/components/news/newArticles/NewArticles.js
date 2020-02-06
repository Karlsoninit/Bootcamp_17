import React from 'react';
import NewItem from '../newsItem/NewItem';
import shortId from 'shortid';
const NewArticles = ({ data }) => (
  <ul>
    {data.map(article => {
      const transformArticle = { ...article, id: shortId() };
      return <NewItem key={transformArticle.id} {...transformArticle} />;
    })}
  </ul>
);

export default NewArticles;
