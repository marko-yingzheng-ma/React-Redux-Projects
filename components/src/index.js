import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail authorName="Marko" commentContent="ni hao"/>
      <CommentDetail authorName="Habibi" commentContent="Hala"/>
      <CommentDetail authorName="Irteza" commentContent="Eyyyyyy"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));