import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const tranformOldProps = ({ author, title, image }) => ({
  author,
  title,
  image
});

export const toggle = param => BaseComponent => {
  console.log("param", param);
  return class Toggle extends Component {
    state = {
      isOpen: false
    };

    showDescription = () => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
      console.log("test void :", this.props);
    };

    render() {
      const { isOpen } = this.state;
      const { description } = this.props;

      // console.log("transform", tranformOldProps(this.props));
      return (
        <>
          <h2>i am HOC</h2>
          <BaseComponent {...tranformOldProps(this.props)} />
          <Button onHandleMenuOpen={this.showDescription} buttonName="show" />
          {isOpen && (
            <Link
              style={{ textDecoration: "none" }}
              to={{
                pathname: `news/${this.props.source}`,
                search: `?category=${this.props.query}`,
                state: { isAuth: true }
              }}
            >
              <p>{description}</p>
            </Link>
          )}
        </>
      );
    }
  };
};
