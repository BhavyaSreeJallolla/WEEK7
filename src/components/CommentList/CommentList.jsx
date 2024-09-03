import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return (
    <div>
      <h1>Comment List</h1>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
