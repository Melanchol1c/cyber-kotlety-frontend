import React from 'react';

import './style.scss';

const Slide = props => {
  const { poster, title, followers, description, tags } = props;

  const renderTags =
    tags &&
    tags.length > 0 &&
    tags.map((tag, i) => (
      <div key={i} className="badge">
        {tag.name}
      </div>
    ));

  return (
    <div className="slide">
      <img src={poster} />
      <div className="description">
        <h3>{title}</h3>
        <p>{followers} followers</p>
        <div className="categories">{renderTags}</div>
        <div className="short-description">{description}</div>
      </div>
    </div>
  );
};

export default Slide;
