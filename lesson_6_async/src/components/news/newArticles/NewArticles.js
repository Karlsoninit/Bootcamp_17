import React from 'react';
import shortId from 'shortid';
import MediaCard from '../../../ui/mediaCard/MediaCard';
const NewArticles = ({ data }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {data.map(article => {
      const transformArticle = { ...article, id: shortId() };
      return (
        <MediaCard key={transformArticle.id} {...(transformArticle || {})} />
      );
    })}
  </div>
);

export default NewArticles;
