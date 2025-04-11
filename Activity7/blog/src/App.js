import React, { useState } from 'react';
import AddPost from './AddPost';
import Post from './Post';

function App() {
  const [postList, setPostList] = useState([
    {
      postNumber: 0,
      text: 'A short psychic broke out of jail. She was a small medium at large',
    },
    {
      postNumber: 1,
      text: 'random text here',
    },
  ]);
  const [postId, setPostId] = useState(3);

  const handleAddPost = (newText) => {
    let newPost = {
      postNumber: postId,
      text: newText
    };
    setPostList(postList => [...postList, newPost]);
    setPostId(postId + 1);
  }

  const handleDeletePost = (id) => {
    let updatedPostList = postList.filter(post => post.postNumber !== id);
    setPostList(updatedPostList);
  }

  const posts = postList.map((post) => (
    <Post key={post.postNumber} text={post.text} id={post.postNumber} onDelete={handleDeletePost} />
  ));

  return (
    <div>
      {posts}
      <AddPost onAdd={handleAddPost} />
    </div>
  );
}

export default App;
