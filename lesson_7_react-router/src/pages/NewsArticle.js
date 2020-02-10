import React, { Component } from "react";
import axios from "axios";

class NewsArticle extends Component {
  state = {
    article: null
  };

  async componentDidMount() {
    try {
      const data = await axios.get(
        "https://newsapi.org/v2/everything?q=cat&from=2020-01-10&sortBy=publishedAt&apiKey=ed5ebee752754cf7a93918ae83acba6f"
      );

      const getArticle = (data, id) => {
        console.log(id);
        return data.find(article => article.publishedAt === id);
      };
      this.setState({
        article: getArticle(data.data.articles, this.props.match.params.article)
      });
    } catch (er) {
      console.log(er);
    }
  }

  handleBack = () => {
    this.props.history.push("/news");
  };

  render() {
    const { article } = this.state;

    return (
      article && (
        <>
          <h2>{article.description}</h2>
          <img src={article.urlToImage} alt="img" />
          <button onClick={this.handleBack}>GoBack</button>
        </>
      )
    );
  }
}

export default NewsArticle;
