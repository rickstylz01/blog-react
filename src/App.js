import React from 'react';
import PostBuilder from './components/PostBuilder';
import { AppWrapper } from './style';

const App = () => {
  return (
    <AppWrapper>
      <h1>Create a new Post</h1>
      <PostBuilder />
    </AppWrapper>
  );
}

export default App;