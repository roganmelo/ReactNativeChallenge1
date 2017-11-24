// 3dparty
import React, { Component } from 'react';

// components
import { Page, Post } from './components';

// utils
import posts from './posts';

class App extends Component {
  state = { posts };

  render = () => (
    <Page title='Go Native App'>
      <For each='post' of={this.state.posts}>
        <Post key={post.id} post={post} />
      </For>
    </Page>
  );
}

export default App;
