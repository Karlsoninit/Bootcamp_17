import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class News extends Component {
  state = {
    news: []
  };

  async componentDidMount() {
    try {
      const data = await axios.get(
        "https://newsapi.org/v2/everything?q=cat&from=2020-01-10&sortBy=publishedAt&apiKey=ed5ebee752754cf7a93918ae83acba6f"
      );
      console.log(data);

      this.setState({
        news: data.data.articles
      });
    } catch (er) {
      console.log(er);
    }
  }

  render() {
    const { news } = this.state;

    return (
      <ul>
        {news.map(article => (
          <li key={article.publishedAt}>
            <Link
              to={{
                pathname: `news/${article.publishedAt}`,
                search: "?category=cat",
                state: { isAuth: true, news, id: article.publishedAt }
              }}
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default News;
