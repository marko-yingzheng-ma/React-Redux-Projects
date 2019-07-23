import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()}/>
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.authorName}
        </a>
        <div className="metadata">
          <span className="date"> Today at 4:00pm</span>
        </div>
        <div className="text">{props.commentContent}</div>
      </div>
    </div>
  );
};

export default CommentDetail;