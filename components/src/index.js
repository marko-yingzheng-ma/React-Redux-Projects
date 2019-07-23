import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Marko" 
        timeAgo="Today at 4:00pm" 
        content="ni hao"
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author="Habibi" 
        timeAgo="Today at 1:00pm" 
        content="Hala"
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author="Irteza" 
        timeAgo="Today at 3:00pm" 
        content="Eyyyyyy"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));