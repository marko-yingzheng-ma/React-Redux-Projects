import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Marko" content="ni hao"/>
      <CommentDetail author="Habibi" content="Hala"/>
      <CommentDetail author="Irteza" content="Eyyyyyy"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));