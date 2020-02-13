import axios from "axios";

export const fetchNews = async (param = "rolex") => {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_DEFAULT_URL}everything?q=${param}&sortBy=publishedAt&apiKey=ed5ebee752754cf7a93918ae83acba6f`
    );
    return data.data.articles;
  } catch (er) {
    console.log(er);
  }
};
