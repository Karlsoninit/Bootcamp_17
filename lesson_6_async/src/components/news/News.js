import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../../ui/spinner/Spinner';
import NewArticles from './newArticles/NewArticles';
import { fetchNews } from '../../fetcher';

class News extends Component {
  state = {
    articles: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const data = await fetchNews();
      this.setState({
        articles: data,
        loading: false,
      });
    } catch (er) {
      console.log(er);
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.inputValue !== this.props.inputValue) {
      const data = await fetchNews(this.props.inputValue);
      this.setState({
        articles: data,
        loading: false,
      });
    }
  }

  render() {
    const { articles, loading } = this.state;
    return (
      <>
        {loading && <Spinner />}
        <NewArticles data={articles} />
      </>
    );
  }
}

export default News;
