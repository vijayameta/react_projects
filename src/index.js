import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import JSON from './db.json';
import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component {

  state = {
    news: JSON
  }

  render() {
    console.log(this.state.news)
    return (
      <div>
        <Header />
        <NewsList news={this.state.news} />
      </div>
    )
  }
};

const root = createRoot(document.getElementById('root'));
root.render(<App />)