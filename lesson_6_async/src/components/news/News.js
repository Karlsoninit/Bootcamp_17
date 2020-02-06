import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../../ui/spinner/Spinner';
import NewArticles from './newArticles/NewArticles';
class News extends Component {
  state = {
    articles: [],
    loading: true,
  };

  async componentDidMount() {
    console.log('componentDidMount');
    try {
      const data = await axios.get(
        'https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-06&sortBy=publishedAt&apiKey=69ff0a0f004045cd8a562c93279c0e93',
      );

      this.setState({
        articles: data.data.articles,
        loading: false,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
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
